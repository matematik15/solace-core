// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.6;

import "../interface/Compound/IComptrollerRinkeby.sol";
import "../interface/Compound/ICToken.sol";
import "./BaseProduct.sol";


/**
 * @title CompoundProductRinkeby
 * @author solace.fi
 * @notice The **CompoundProduct** can be used to purchase coverage for **Compound** positions.
 *
 * Note that **CompoundProductRinkeby** was created because the Comptroller implementation differs between Mainnet and Rinkeby. Use this version to cover positions on Rinkeby or [**CompoundProduct**](./CompoundProduct) to cover positions on Mainnet.
 */
contract CompoundProductRinkeby is BaseProduct {

    // IComptroller.
    IComptrollerRinkeby internal _comptroller;

    /**
      * @notice Constructs the CompoundRinkebyProduct.
      * @param governance_ The address of the [governor](/docs/protocol/governance).
      * @param policyManager_ The [`PolicyManager`](../PolicyManager) contract.
      * @param registry_ The [`Registry`](../Registry) contract.
      * @param comptroller_ The Compound Comptroller.
      * @param minPeriod_ The minimum policy period in blocks to purchase a **policy**.
      * @param maxPeriod_ The maximum policy period in blocks to purchase a **policy**.
      * @param price_ The cover price for the **Product**.
      * @param maxCoverPerUserDivisor_ The max cover amount divisor for per user. (maxCover / divisor = maxCoverPerUser).
     */
    constructor (
        address governance_,
        IPolicyManager policyManager_,
        IRegistry registry_,
        address comptroller_,
        uint40 minPeriod_,
        uint40 maxPeriod_,
        uint24 price_,
        uint32 maxCoverPerUserDivisor_
    ) BaseProduct(
        governance_,
        policyManager_,
        registry_,
        comptroller_,
        minPeriod_,
        maxPeriod_,
        price_,
        maxCoverPerUserDivisor_,
        "Solace.fi-CompoundProduct",
        "1"
    ) {
        _comptroller = IComptrollerRinkeby(comptroller_);
        _SUBMIT_CLAIM_TYPEHASH = keccak256("CompoundProductSubmitClaim(uint256 policyID,address claimant,uint256 amountOut,uint256 deadline)");
        _productName = "Compound";
    }

    /**
     * @notice Compound's Comptroller.
     * @return comptroller_ The comptroller.
     */
    function comptroller() external view returns (address comptroller_) {
        return address(_comptroller);
    }

    /**
     * @notice Determines if the byte encoded description of a position(s) is valid.
     * The description will only make sense in context of the product.
     * @dev This function should be overwritten in inheriting Product contracts.
     * If invalid, return false if possible. Reverting is also acceptable.
     * @param positionDescription The description to validate.
     * @return isValid True if is valid.
     */
    function isValidPositionDescription(bytes memory positionDescription) public view virtual override returns (bool isValid) {
        // check length
        // solhint-disable-next-line var-name-mixedcase
        uint256 ADDRESS_SIZE = 20;
        // must be concatenation of one or more addresses
        if(positionDescription.length == 0 || positionDescription.length % ADDRESS_SIZE != 0) return false;
        // check all addresses in list
        for(uint256 offset = 0; offset < positionDescription.length; offset += ADDRESS_SIZE) {
            // get next address
            address positionContract;
            // solhint-disable-next-line no-inline-assembly
            assembly {
                positionContract := div(mload(add(add(positionDescription, 0x20), offset)), 0x1000000000000000000000000)
            }
            // must be a cToken
            (bool isListed, ) = _comptroller.markets(positionContract);
            if(!isListed) return false;
        }
        return true;
    }

    /***************************************
    GOVERNANCE FUNCTIONS
    ***************************************/

    /**
     * @notice Changes the covered platform.
     * Can only be called by the current [**governor**](/docs/protocol/governance).
     * @dev Use this if the the protocol changes their registry but keeps the children contracts.
     * A new version of the protocol will likely require a new Product.
     * @param comptroller_ The new Comptroller.
     */
    function setCoveredPlatform(address comptroller_) public override {
        super.setCoveredPlatform(comptroller_);
        _comptroller = IComptrollerRinkeby(comptroller_);
    }
}
