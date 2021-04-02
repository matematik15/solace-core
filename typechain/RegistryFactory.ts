/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Registry } from "./Registry";

export class RegistryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Registry> {
    return super.deploy(overrides || {}) as Promise<Registry>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Registry {
    return super.attach(address) as Registry;
  }
  connect(signer: Signer): RegistryFactory {
    return super.connect(signer) as RegistryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Registry {
    return new Contract(address, _abi, signerOrProvider) as Registry;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    name: "GovernanceSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_locker",
        type: "address",
      },
    ],
    name: "LockerSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_master",
        type: "address",
      },
    ],
    name: "MasterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_product",
        type: "address",
      },
    ],
    name: "ProductAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_product",
        type: "address",
      },
    ],
    name: "ProductRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_solace",
        type: "address",
      },
    ],
    name: "SolaceSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "TreasurySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "VaultSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_product",
        type: "address",
      },
    ],
    name: "addProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_productNum",
        type: "uint256",
      },
    ],
    name: "getProduct",
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
    inputs: [
      {
        internalType: "address",
        name: "_product",
        type: "address",
      },
    ],
    name: "isProduct",
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
    name: "locker",
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
    name: "master",
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
    name: "numProducts",
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
    inputs: [
      {
        internalType: "address",
        name: "_product",
        type: "address",
      },
    ],
    name: "removeProduct",
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
        name: "_locker",
        type: "address",
      },
    ],
    name: "setLocker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_master",
        type: "address",
      },
    ],
    name: "setMaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_solace",
        type: "address",
      },
    ],
    name: "setSolace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "setTreasury",
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
    name: "solace",
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
    name: "treasury",
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
    name: "vault",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610a03806100326000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c8063ab033ea9116100b2578063ee97f7f311610081578063f0f4426011610066578063f0f442601461021a578063f44a6ca91461022d578063fbfa77cf146102405761011b565b8063ee97f7f3146101ff578063efbd742f146102075761011b565b8063ab033ea9146101bc578063ac964f21146101cf578063b9db15b4146101e4578063d7b96d4e146101f75761011b565b806361d027b3116100ee57806361d027b31461016e5780636817031b14610176578063787b6725146101895780637fd291921461019c5761011b565b8063171060ec1461012057806326fae0d3146101355780633ef8d97e146101485780635aa6e67514610166575b600080fd5b61013361012e3660046108a8565b610248565b005b6101336101433660046108a8565b6102d1565b610150610346565b60405161015d91906108e7565b60405180910390f35b610150610355565b610150610364565b6101336101843660046108a8565b610373565b6101336101973660046108a8565b6103e8565b6101af6101aa3660046108a8565b61044d565b60405161015d91906108fb565b6101336101ca3660046108a8565b610460565b6101d76104d5565b60405161015d919061097f565b6101506101f23660046108cf565b6104e6565b6101506104f3565b610150610502565b6101336102153660046108a8565b610511565b6101336102283660046108a8565b610586565b61013361023b3660046108a8565b6105fb565b610150610660565b6000546001600160a01b0316331461027b5760405162461bcd60e51b815260040161027290610948565b60405180910390fd5b600580546001600160a01b0319166001600160a01b0383161790556040517fef7ce00901486d0ae4bbe00a818eb6bb2f42bc78fc75571cf294c1c50c61adfd906102c69083906108e7565b60405180910390a150565b6000546001600160a01b031633146102fb5760405162461bcd60e51b815260040161027290610948565b600280546001600160a01b0319166001600160a01b0383161790556040517f394cfde23f242c0bdfd85485626efd062625be743888c5254471e32f8b2c3db1906102c69083906108e7565b6001546001600160a01b031681565b6000546001600160a01b031681565b6004546001600160a01b031681565b6000546001600160a01b0316331461039d5760405162461bcd60e51b815260040161027290610948565b600380546001600160a01b0319166001600160a01b0383161790556040517fe7ae49f883c825b05681b3e00e8be6fdea9ed2a8a45e4c6ecb9390fc44cce615906102c69083906108e7565b6000546001600160a01b031633146104125760405162461bcd60e51b815260040161027290610948565b61041d60068261066f565b507fbcfcd682fb30ef99771fd0e6a263238ad5336a768db67bb9d3387807c02e43e5816040516102c691906108e7565b600061045a60068361068b565b92915050565b6000546001600160a01b0316331461048a5760405162461bcd60e51b815260040161027290610948565b600080546001600160a01b0319166001600160a01b0383161790556040517fc73be659241aade67e9a059bcf21494955018b213dbd1179054ccf928b13f3b6906102c69083906108e7565b60006104e160066106a0565b905090565b600061045a6006836106ab565b6005546001600160a01b031681565b6002546001600160a01b031681565b6000546001600160a01b0316331461053b5760405162461bcd60e51b815260040161027290610948565b600180546001600160a01b0319166001600160a01b0383161790556040517f53b46c46570dad0d268e5d06d24322a4b421651c520d18471d9d67b1ab11c60c906102c69083906108e7565b6000546001600160a01b031633146105b05760405162461bcd60e51b815260040161027290610948565b600480546001600160a01b0319166001600160a01b0383161790556040517f3c864541ef71378c6229510ed90f376565ee42d9c5e0904a984a9e863e6db44f906102c69083906108e7565b6000546001600160a01b031633146106255760405162461bcd60e51b815260040161027290610948565b6106306006826106b7565b507fb47bc51361412ccd13c03ce02cb7481334b4302ac26726397e82e12710c8a3a2816040516102c691906108e7565b6003546001600160a01b031681565b6000610684836001600160a01b0384166106cc565b9392505050565b6000610684836001600160a01b0384166107e9565b600061045a82610801565b60006106848383610805565b6000610684836001600160a01b03841661085e565b600081815260018301602052604081205480156107df5760006106f06001836109a0565b8554909150600090610704906001906109a0565b9050600086600001828154811061072b57634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061075c57634e487b7160e01b600052603260045260246000fd5b600091825260209091200155610773836001610988565b600082815260018901602052604090205586548790806107a357634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061045a565b600091505061045a565b60009081526001919091016020526040902054151590565b5490565b815460009082106108285760405162461bcd60e51b815260040161027290610906565b82600001828154811061084b57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b600061086a83836107e9565b6108a05750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561045a565b50600061045a565b6000602082840312156108b9578081fd5b81356001600160a01b0381168114610684578182fd5b6000602082840312156108e0578081fd5b5035919050565b6001600160a01b0391909116815260200190565b901515815260200190565b60208082526022908201527f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e604082015261647360f01b606082015260800190565b6020808252600b908201527f21676f7665726e616e6365000000000000000000000000000000000000000000604082015260600190565b90815260200190565b6000821982111561099b5761099b6109b7565b500190565b6000828210156109b2576109b26109b7565b500390565b634e487b7160e01b600052601160045260246000fdfea264697066735822122074e093a0d6e47025dd33da748f9e72f1e1f5f5963696bca71f1406cf2cac375264736f6c63430008000033";
