// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.6;

import "./BondTellerBaseV2.sol";
import "./interface/IBondTellerErc20V2.sol";

/**
 * @title BondTellerErc20V2
 * @author solace.fi
 * @notice A bond teller that accepts an ERC20 as payment.
 *
 * The main difference between V1 and V2 SOLACE bonds, is that V1 SOLACE bonds can be redeemed for payout only after the vestingTerm, while V2 SOLACE bonds linearly vest over the localVestingTerm.
 * `redeem()` in BondTellerBase.sol has been renamed to `claimPayout()` in BondTellerBaseV2.sol - to reduce confusion
 *
 * Users purchase SOLACE bonds from Bond Tellers, think of them as the ATM (as in automated teller machine at your banking branch) specialising in SOLACE protocol bonds
 *
 * There is a separate Bond Teller for each type of bond; the Bond Teller sets all the terms for the bond
 * Buying a bond from a Bond Teller will mint a `SPT V2` ERC721 to the user
 * Purchasers pay `principal` to the Bond Teller to purchase the bond, these payments are routed to the underwriting pool to help the SOLACE protocol back risk.
 * Buying a bond will entitle the purchaser to an amount of `payoutToken` - either [**SOLACE**](./SOLACE) or [**xSOLACE**](./xSOLACE)
 * Bonds will linearly vest over the `localvestingTerm` (default 5-days or 432,000 seconds)
 * Purchasers can `claimPayout` anytime after the `startTime`.
 * If `claimPayout` is called anytime after `vestingStart + localVestingTerm`, then the `SPT V2` ERC721 is burned and the bond terms are completed.
 * 
 * Most of the implementation details are in [`BondTellerBase`](./BondTellerBaseV2).
 */
contract BondTellerErc20V2 is BondTellerBaseV2, IBondTellerErc20V2 {

    /***************************************
    BONDER FUNCTIONS
    ***************************************/

    /**
     * @notice Create a bond by depositing `amount` of `principal`.
     * Principal will be transferred from `msg.sender` using `allowance`.
     * @dev Switched order so that SafeERC20.safeTransferFrom occurs last to comply with Checks-Effects-Interactions
     * @param amount Amount of principal to deposit.
     * @param minAmountOut The minimum **SOLACE** or **xSOLACE** out.
     * @param depositor The bond recipient, default msg.sender.
     * @param stake True to stake, false to not stake.
     * @return payout The amount of SOLACE or xSOLACE in the bond.
     * @return bondID The ID of the newly created bond.
     */
    function deposit(
        uint256 amount,
        uint256 minAmountOut,
        address depositor,
        bool stake
    ) external override returns (uint256 payout, uint256 bondID) {
        (payout, bondID) = _deposit(amount, minAmountOut, depositor, stake);
        // pull tokens
        SafeERC20.safeTransferFrom(principal, msg.sender, address(this), amount);
    }

    /**
     * @notice Create a bond by depositing `amount` of `principal`.
     * Principal will be transferred from `depositor` using `permit`.
     * Note that not all ERC20s have a permit function, in which case this function will revert.
     * @dev Switched order so that SafeERC20.safeTransferFrom occurs last to comply with Checks-Effects-Interactions
     * @param amount Amount of principal to deposit.
     * @param minAmountOut The minimum **SOLACE** or **xSOLACE** out.
     * @param depositor The bond recipient, default msg.sender.
     * @param stake True to stake, false to not stake.
     * @param deadline Time the transaction must go through before.
     * @param v secp256k1 signature
     * @param r secp256k1 signature
     * @param s secp256k1 signature
     * @return payout The amount of SOLACE or xSOLACE in the bond.
     * @return bondID The ID of the newly created bond.
     */
    function depositSigned(
        uint256 amount,
        uint256 minAmountOut,
        address depositor,
        bool stake,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external override returns (uint256 payout, uint256 bondID) {
        (payout, bondID) = _deposit(amount, minAmountOut, depositor, stake);
        // permit
        IERC20Permit(address(principal)).permit(depositor, address(this), amount, deadline, v, r, s);
        // pull tokens
        SafeERC20.safeTransferFrom(principal, depositor, address(this), amount);
    }

    /**
     * @notice Create a bond by depositing `amount` of `principal`.
     * @param amount Amount of principal to deposit.
     * @param minAmountOut The minimum **SOLACE** or **xSOLACE** out.
     * @param depositor The bond recipient, default msg.sender.
     * @param stake True to stake, false to not stake.
     * @return payout The amount of SOLACE or xSOLACE in the bond.
     * @return bondID The ID of the newly created bond.
     */
    function _deposit(
        uint256 amount,
        uint256 minAmountOut,
        address depositor,
        bool stake
    ) internal returns (uint256 payout, uint256 bondID) {
        require(depositor != address(0), "invalid address");
        require(!paused, "cannot deposit while paused");

        require(termsSet, "not initialized");
        require(block.timestamp >= uint256(startTime), "bond not yet started");
        require(block.timestamp <= uint256(endTime), "bond concluded");

        payout = _calculateTotalPayout(amount);

        // ensure there is remaining capacity for bond
        if (capacityIsPayout) {
            // capacity in payout terms
            require(capacity >= payout, "bond at capacity");
            capacity = capacity - payout;
        } else {
            // capacity in principal terms
            require(capacity >= amount, "bond at capacity");
            capacity = capacity - amount;
        }
        require(payout <= maxPayout, "bond too large");

        // route principal
        uint256 daoFee = amount * daoFeeBps / MAX_BPS;
        if(daoFee > 0) SafeERC20.safeTransfer(principal, dao, daoFee);
        SafeERC20.safeTransfer(principal, underwritingPool, amount - daoFee);
        // route solace
        bondDepo.pullSolace(payout);
        uint256 bondFee = payout * bondFeeBps / MAX_BPS;
        if(bondFee > 0) {
            SafeERC20.safeTransfer(solace, address(xsolace), bondFee);
            payout -= bondFee;
        }

        // optionally stake
        address payoutToken;
        if(stake) {
            payoutToken = address(xsolace);
            payout = xsolace.stake(payout);
        } else {
            payoutToken = address(solace);
        }
        require(minAmountOut <= payout, "slippage protection: insufficient output");

        // record bond info
        bondID = ++numBonds;
        uint40 vestingStart = toUint40(block.timestamp);

        bonds[bondID] = Bond({
            payoutToken: payoutToken,
            vestingStart: vestingStart,
            localVestingTerm: globalVestingTerm,
            payoutAmount: payout,
            payoutAlreadyClaimed: 0,
            pricePaid: amount
        });
        _mint(depositor, bondID);
        emit CreateBond(bondID, amount, payoutToken, payout, vestingStart);
        return (payout, bondID);
    }
}