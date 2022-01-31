// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.6;

import "./../interfaces/utils/ICloneable.sol";

/**
 * @title Factory for arbitrary code deployment using the "CREATE" and "CREATE2" opcodes
 */
abstract contract Cloneable is ICloneable {

    /***************************************
    GLOBAL VARIABLES
    ***************************************/

    bytes private constant MINIMAL_PROXY_INIT_CODE_PREFIX =
        hex"3d602d80600a3d3981f3_363d3d373d3d3d363d73";
    bytes private constant MINIMAL_PROXY_INIT_CODE_SUFFIX =
        hex"5af43d82803e903d91602b57fd5bf3";

    /***************************************
    VIEW FUNCTIONS
    ***************************************/

    /**
     * @notice calculate the deployment address for a given target and salt
     * @param salt input for deterministic address calculation
     * @return deployment address
     */
    function calculateMinimalProxyDeploymentAddress(bytes32 salt) public view override returns (address) {
        return
            _calculateDeploymentAddress(
                keccak256(_generateMinimalProxyInitCode()),
                salt
            );
    }

    /***************************************
    HELPER FUNCTIONS
    ***************************************/

    /**
     * @notice calculate the _deployMetamorphicContract deployment address for a given salt
     * @param initCodeHash hash of contract initialization code
     * @param salt input for deterministic address calculation
     * @return deployment address
     */
    function _calculateDeploymentAddress(bytes32 initCodeHash, bytes32 salt) internal view returns (address) {
        return
            address(
                uint160(
                    uint256(
                        keccak256(
                            abi.encodePacked(
                                hex"ff",
                                address(this),
                                salt,
                                initCodeHash
                            )
                        )
                    )
                )
            );
    }

    /**
     * @notice deploy an EIP1167 minimal proxy using "CREATE" opcode
     * @dev reverts if deployment is not successful
     * @return minimalProxy address of deployed proxy
     */
    function _deployMinimalProxy() internal returns (address minimalProxy) {
        return _deploy(_generateMinimalProxyInitCode());
    }

    /**
     * @notice deploy an EIP1167 minimal proxy using "CREATE2" opcode
     * @dev reverts if deployment is not successful (likely because salt has already been used)
     * @param salt input for deterministic address calculation
     * @return minimalProxy address of deployed proxy
     */
    function _deployMinimalProxy(bytes32 salt) internal returns (address minimalProxy) {
        return _deploy(_generateMinimalProxyInitCode(), salt);
    }

    /**
     * @notice concatenate elements to form EIP1167 minimal proxy initialization code
     * @return bytes memory initialization code
     */
    function _generateMinimalProxyInitCode() internal view returns (bytes memory) {
        return
            abi.encodePacked(
                MINIMAL_PROXY_INIT_CODE_PREFIX,
                address(this),
                MINIMAL_PROXY_INIT_CODE_SUFFIX
            );
    }

    /**
     * @notice deploy contract code using "CREATE" opcode
     * @param initCode contract initialization code
     * @return deployment address of deployed contract
     */
    function _deploy(bytes memory initCode) internal returns (address deployment) {
        // solhint-disable-next-line no-inline-assembly
        assembly {
            let encoded_data := add(0x20, initCode)
            let encoded_size := mload(initCode)
            deployment := create(0, encoded_data, encoded_size)
        }
        require(deployment != address(0), "Cloneable: failed deployment");
        emit ContractDeployed(deployment);
    }

    /**
     * @notice deploy contract code using "CREATE2" opcode
     * @dev reverts if deployment is not successful (likely because salt has already been used)
     * @param initCode contract initialization code
     * @param salt input for deterministic address calculation
     * @return deployment address of deployed contract
     */
    function _deploy(bytes memory initCode, bytes32 salt) internal returns (address deployment) {
        // solhint-disable-next-line no-inline-assembly
        assembly {
            let encoded_data := add(0x20, initCode)
            let encoded_size := mload(initCode)
            deployment := create2(0, encoded_data, encoded_size, salt)
        }
        require(deployment != address(0), "Cloneable: failed deployment");
        emit ContractDeployed(deployment);
    }
}