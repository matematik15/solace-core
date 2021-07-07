// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.0;


/**
 * @title IClaimsEscrow: Escrow Contract for solace.fi claims
 * @author solace.fi
 * @notice The interface for the Claims Escrow contract.
 */
interface IClaimsEscrow {

    /**
     * Receive function. Deposits eth.
     */
    receive() external payable;

    /**
     * Fallback function. Deposits eth.
     */
    fallback () external payable;

    /**
     * @notice Receives ETH from the Vault for a claim
     * Only callable by the Vault contract
     * @param _claimant Address of the claimant
     * @param _amount Amount of ETH to claim
     * @return claimID The id of the claim received
     */
    function receiveClaim(address _claimant, uint256 _amount) external payable returns (uint256 claimID);

    /**
     * @notice Allows claimants to withdraw their claims payout
     * Only callable by the claimant
     * Only callable after the cooldown period has elapsed (from the time the claim was approved and processed)
     * @param claimID The id of the claim to withdraw payout for
     */
    function withdrawClaimsPayout(uint256 claimID) external;

    /**
     * @notice Adjusts the value of a claim.
     * Can only be called by the current governor.
     * @param claimID The claim to adjust.
     * @param value The new payout of the claim.
     */
    function adjustClaim(uint256 claimID, uint256 value) external;

    /**
     * @notice Rescues misplaced tokens.
     * Can only be called by the current governor.
     * @param token Token to pull.
     * @param amount Amount to pull.
     * @param dst Destination for tokens.
     */
    function sweep(address token, uint256 amount, address dst) external;

    function cooldownPeriod() external view returns (uint256);

    function setCooldownPeriod(uint256 _period) external;
}
