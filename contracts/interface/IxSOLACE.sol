// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol";


/**
 * @title xSolace Token (xSOLACE)
 * @author solace.fi
 * @notice The **SOLACE** staking contract.
 *
 * Users can deposit their **SOLACE** and receive **xSOLACE**. **xSOLACE** is designed to be a safe up-only contract that allows users to enter or leave at any time. The value of **xSOLACE** relative to **SOLACE** will increase when **SOLACE** is sent to this contract, namely from premiums from coverage polices.
 */
interface IxSOLACE is IERC20, IERC20Permit {

    /***************************************
    EVENTS
    ***************************************/

    /// @notice Emitted when SOLACE is deposited.
    event Deposited(address user, uint256 amountSolace, uint256 amountXSolace);
    /// @notice Emitted when SOLACE is withdrawn.
    event Withdrawl(address user, uint256 amountSolace, uint256 amountXSolace);

    /***************************************
    VIEW FUNCTIONS
    ***************************************/

    /// @notice native solace token
    function solace() external view returns (address solace_);

    /**
     * @notice Determines the current value in xsolace for an amount of solace.
     * @param amountSolace The amount of solace.
     * @return amountXSolace The amount of xsolace.
     */
    function solaceToXSolace(uint256 amountSolace) external view returns (uint256 amountXSolace);

    /**
     * @notice Determines the current value in solace for an amount of xsolace.
     * @param amountXSolace The amount of xsolace.
     * @return amountSolace The amount of solace.
     */
    function xSolaceToSolace(uint256 amountXSolace) external view returns (uint256 amountSolace);

    /***************************************
    MUTATOR FUNCTIONS
    ***************************************/

    /**
     * @notice Allows a user to deposit **SOLACE**.
     * Shares of the pool (xSOLACE) are minted to msg.sender.
     * @param amountSolace Amount of solace to deposit.
     */
    function deposit(uint256 amountSolace) external;

    /**
     * @notice Allows a user to deposit **SOLACE**.
     * Shares of the pool (xSOLACE) are minted to `receiver`.
     * @param receiver The user that deposit will be credited towards.
     * @param amountSolace The deposit amount.
     */
    function depositFor(address receiver, uint256 amountSolace) external;

    /**
     * @notice Allows a user to deposit **SOLACE**.
     * Shares of the pool (xSOLACE) are minted to msg.sender.
     * @param depositor The depositing user.
     * @param amountSolace The deposit amount.
     * @param deadline Time the transaction must go through before.
     * @param v secp256k1 signature
     * @param r secp256k1 signature
     * @param s secp256k1 signature
     */
    function depositSigned(address depositor, uint256 amountSolace, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external;

    /**
     * @notice Allows a user to withdraw **xSOLACE**.
     * Burns **xSOLACE** tokens and transfers **SOLACE** to msg.sender.
     * @param amountXSolace Amount of xSOLACE.
     * @return amountSolace Amount of SOLACE returned.
     */
    function withdraw(uint256 amountXSolace) external returns (uint256 amountSolace);

    /**
     * @notice Burns **xSOLACE** from msg.sender.
     * @param amount Amount to burn.
     */
    function burn(uint256 amount) external;
}
