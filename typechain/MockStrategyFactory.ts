/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockStrategy } from "./MockStrategy";

export class MockStrategyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_vault: string, overrides?: Overrides): Promise<MockStrategy> {
    return super.deploy(_vault, overrides || {}) as Promise<MockStrategy>;
  }
  getDeployTransaction(
    _vault: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_vault, overrides || {});
  }
  attach(address: string): MockStrategy {
    return super.attach(address) as MockStrategy;
  }
  connect(signer: Signer): MockStrategyFactory {
    return super.connect(signer) as MockStrategyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockStrategy {
    return new Contract(address, _abi, signerOrProvider) as MockStrategy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EmergencyExitEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loss",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtPayment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtOutstanding",
        type: "uint256",
      },
    ],
    name: "Harvested",
    type: "event",
  },
  {
    inputs: [],
    name: "delegatedAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyExit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "estimatedTotalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protectedToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setEmergencyExit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "setVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "want",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountNeeded",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "_loss",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161110138038061110183398101604081905261002f916100f9565b600080546001600160a01b03199081163317909155600180546001600160a01b0380851691909316179081905560408051637e062a3560e11b815290518493929092169163fc0c546a91600480820192602092909190829003018186803b15801561009957600080fd5b505afa1580156100ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100d191906100f9565b600280546001600160a01b0319166001600160a01b0392909216919091179055506101279050565b60006020828403121561010a578081fd5b81516001600160a01b0381168114610120578182fd5b9392505050565b610fcb806101366000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636817031b1161008c578063d653943a11610066578063d653943a1461017f578063efbb5cb014610187578063fbfa77cf1461018f578063fcf2d0ad14610197576100df565b80636817031b146101515780638e6350e214610164578063ab033ea91461016c576100df565b80634641257d116100bd5780634641257d146101375780635641ec03146101415780635aa6e67514610149576100df565b80631f1fcd51146100e457806322f3e2d4146101025780632e1a7d4d14610117575b600080fd5b6100ec61019f565b6040516100f99190610d06565b60405180910390f35b61010a6101ae565b6040516100f99190610d33565b61012a610125366004610cba565b610250565b6040516100f99190610ed0565b61013f6102b4565b005b61010a6104a5565b6100ec6104b5565b61013f61015f366004610bf5565b6104c4565b61012a61051d565b61013f61017a366004610bf5565b610522565b6100ec61057b565b61012a610581565b6100ec610602565b61013f610611565b6002546001600160a01b031681565b6001546040516339ebf82360e01b815260009182916001600160a01b03909116906339ebf823906101e3903090600401610d06565b6101206040518083038186803b1580156101fc57600080fd5b505afa158015610210573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102349190610c3c565b60400151118061024b57506000610249610581565b115b905090565b6001546000906001600160a01b031633146102865760405162461bcd60e51b815260040161027d90610e05565b60405180910390fd5b6000610291836106f6565b6002549093509091506102ae906001600160a01b0316338361084f565b50919050565b6000546001600160a01b031633146102de5760405162461bcd60e51b815260040161027d90610d71565b60015460405163bdcf36bb60e01b8152600091829182916001600160a01b03169063bdcf36bb90610313903090600401610d06565b60206040518083038186803b15801561032b57600080fd5b505afa15801561033f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103639190610cd2565b600254909150600090600160a01b900460ff16156103c0576000610385610581565b905061039e8382116103975783610399565b815b6106f6565b94509150828211156103ba576103b48383610f42565b94508291505b506103d1565b6103c9826108d7565b919550935090505b6001546040516328766ebf60e21b81526001600160a01b039091169063a1d9bafc9061040590879087908690600401610ed9565b602060405180830381600087803b15801561041f57600080fd5b505af1158015610433573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104579190610cd2565b915061046282610a4b565b7f4c0f499ffe6befa0ca7c826b0916cf87bea98de658013e76938489368d60d509848483856040516104979493929190610eef565b60405180910390a150505050565b600254600160a01b900460ff1681565b6000546001600160a01b031681565b6000546001600160a01b031633146104ee5760405162461bcd60e51b815260040161027d90610d71565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600090565b6000546001600160a01b0316331461054c5760405162461bcd60e51b815260040161027d90610d71565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b610bad81565b6002546040516370a0823160e01b81526000916001600160a01b0316906370a08231906105b2903090600401610d06565b60206040518083038186803b1580156105ca57600080fd5b505afa1580156105de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024b9190610cd2565b6001546001600160a01b031681565b6000546001600160a01b0316331461063b5760405162461bcd60e51b815260040161027d90610d71565b600280547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b17905560015460405163177329a960e31b81526001600160a01b039091169063bb994d4890610699903090600401610d06565b600060405180830381600087803b1580156106b357600080fd5b505af11580156106c7573d6000803e3d6000fd5b50506040517f97e963041e952738788b9d4871d854d282065b8f90a464928d6528f2e9a4fd0b925060009150a1565b6001546040516339ebf82360e01b8152600091829182916001600160a01b0316906339ebf8239061072b903090600401610d06565b6101206040518083038186803b15801561074457600080fd5b505afa158015610758573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077c9190610c3c565b60c001516002546040516370a0823160e01b81529192506000916001600160a01b03909116906370a08231906107b6903090600401610d06565b60206040518083038186803b1580156107ce57600080fd5b505afa1580156107e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108069190610cd2565b9050808511156108245792508261081d8186610f42565b9250610848565b80821115610844576108368183610f42565b925084831115610844578492505b8493505b5050915091565b6108d28363a9059cbb60e01b848460405160240161086e929190610d1a565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610a4e565b505050565b6002546040516370a0823160e01b81526000918291829182916001600160a01b03909116906370a0823190610910903090600401610d06565b60206040518083038186803b15801561092857600080fd5b505afa15801561093c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109609190610cd2565b6001546040516339ebf82360e01b81529192506000916001600160a01b03909116906339ebf82390610996903090600401610d06565b6101206040518083038186803b1580156109af57600080fd5b505afa1580156109c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e79190610c3c565b60c00151905085821115610a0957859250610a028383610f42565b9150610a10565b9091506000905b610a1a8382610f42565b905080821115610a3557610a2e8183610f42565b9450610a42565b610a3f8282610f42565b93505b50509193909250565b50565b6000610aa3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610add9092919063ffffffff16565b8051909150156108d25780806020019051810190610ac19190610c1c565b6108d25760405162461bcd60e51b815260040161027d90610e73565b6060610aec8484600085610af6565b90505b9392505050565b606082471015610b185760405162461bcd60e51b815260040161027d90610da8565b610b2185610bb6565b610b3d5760405162461bcd60e51b815260040161027d90610e3c565b600080866001600160a01b03168587604051610b599190610cea565b60006040518083038185875af1925050503d8060008114610b96576040519150601f19603f3d011682016040523d82523d6000602084013e610b9b565b606091505b5091509150610bab828286610bbc565b979650505050505050565b3b151590565b60608315610bcb575081610aef565b825115610bdb5782518084602001fd5b8160405162461bcd60e51b815260040161027d9190610d3e565b600060208284031215610c06578081fd5b81356001600160a01b0381168114610aef578182fd5b600060208284031215610c2d578081fd5b81518015158114610aef578182fd5b6000610120808385031215610c4f578182fd5b610c5881610f0a565b9050825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060208284031215610ccb578081fd5b5035919050565b600060208284031215610ce3578081fd5b5051919050565b60008251610cfc818460208701610f65565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6000602082528251806020840152610d5d816040850160208701610f65565b601f01601f19169190910160400192915050565b6020808252600b908201527f21676f7665726e616e6365000000000000000000000000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b60208082526006908201527f217661756c740000000000000000000000000000000000000000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b9283526020830191909152604082015260600190565b93845260208401929092526040830152606082015260800190565b60405181810167ffffffffffffffff81118282101715610f3a57634e487b7160e01b600052604160045260246000fd5b604052919050565b600082821015610f6057634e487b7160e01b81526011600452602481fd5b500390565b60005b83811015610f80578181015183820152602001610f68565b83811115610f8f576000848401525b5050505056fea2646970667358221220c496c3de648e5f0220e1788ef8ffe5ec6cfbd0f9def0061c88082726688daa8e64736f6c63430008000033";
