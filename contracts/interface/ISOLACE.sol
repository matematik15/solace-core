// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

/**
 * @title Solace Token (SOLACE)
 * @author solace.fi
 * @notice **Solace** tokens can be earned by depositing **Capital Provider** or **Liquidity Provider** tokens to the [`Master`](./Master) contract.
 * **SOLACE** can also be locked for a preset time in the `Locker` contract to recieve `veSOLACE` tokens.
 */
interface ISOLACE is IERC20Metadata {

    /**
     * @notice Returns true if `account` is authorized to mint **SOLACE**.
     * @param account Account to query.
     * @return status True if `account` can mint, false otherwise.
     */
    function isMinter(address account) external view returns (bool status);

    /**
     * @notice The function creates new tokens and mints them to the receiver account.
     * Can only be called by authorized minters.
     * @param account The receiver of new tokens.
     * @param amount The number of new tokens.
     */
    function mint(address account, uint256 amount)external ;

    /**
     * @notice Adds a new minter.
     * Can only be called by the current [**governor**](/docs/user-docs/Governance).
     * @param minter The new minter.
     */
    function addMinter(address minter) external;

    /**
     * @notice Removes a minter.
     * Can only be called by the current [**governor**](/docs/user-docs/Governance).
     * @param minter The minter to remove.
     */
    function removeMinter(address minter) external;
}