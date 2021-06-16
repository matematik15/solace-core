// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "./interface/IExchangeQuoter.sol";


/**
 * @title ExchangeQuoterManual
 * @author solace.
 * @notice Calculates exchange rates for trades between ERC20 tokens.
 */
contract ExchangeQuoterManual is IExchangeQuoter {

    /// @notice Governor.
    address public governance;

    /// @notice Governance to take over.
    address public newGovernance;

    // given a token, how much eth could one token buy (respecting decimals)
    mapping(address => uint256) public rates;

    // Emitted when Governance is set
    event GovernanceTransferred(address _newGovernance);

    /**
     * @notice Constructs the ExchangeQuoter contract.
     * @param _governance Address of the governor.
     */
    constructor(address _governance) {
        governance = _governance;
    }

    /**
     * @notice Allows governance to be transferred to a new governor.
     * Can only be called by the current governor.
     * @param _governance The new governor.
     */
    function setGovernance(address _governance) external {
        // can only be called by governor
        require(msg.sender == governance, "!governance");
        newGovernance = _governance;
    }

    /**
     * @notice Accepts the governance role.
     * Can only be called by the new governor.
     */
    function acceptGovernance() external {
        // can only be called by new governor
        require(msg.sender == newGovernance, "!governance");
        governance = newGovernance;
        newGovernance = address(0x0);
        emit GovernanceTransferred(msg.sender);
    }

    /**
     * @notice Sets the exchange rates.
     * Can only be called by the current governor.
     * @param _tokens The tokens to set.
     * @param _rates The rates to set.
     */
    function setRates(address[] calldata _tokens, uint256[] calldata _rates) external {
        // can only be called by governor
        require(msg.sender == governance, "!governance");
        uint256 length = _tokens.length;
        require(length == _rates.length, "unequal lengths");
        for(uint256 i = 0; i < length; ++i) {
            rates[_tokens[i]] = _rates[i];
        }
    }

    /**
     * @notice Calculates the exchange rate for an _amount of _token to eth.
     * @param _token The token to give.
     * @param _amount The amount to give.
     * @return The amount of eth received.
     */
    function tokenToEth(address _token, uint256 _amount) external view override returns (uint256) {
        return _amount * rates[_token] / (10 ** IERC20Metadata(_token).decimals());
    }
}