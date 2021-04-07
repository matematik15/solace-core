/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Master } from "./Master";

export class MasterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _solace: string,
    _solacePerBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<Master> {
    return super.deploy(
      _solace,
      _solacePerBlock,
      overrides || {}
    ) as Promise<Master>;
  }
  getDeployTransaction(
    _solace: string,
    _solacePerBlock: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _solace,
      _solacePerBlock,
      overrides || {}
    );
  }
  attach(address: string): Master {
    return super.attach(address) as Master;
  }
  connect(signer: Signer): MasterFactory {
    return super.connect(signer) as MasterFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Master {
    return new Contract(address, _abi, signerOrProvider) as Master;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract SOLACE",
        name: "_solace",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_solacePerBlock",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "DepositErc20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "DepositErc721",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
    ],
    name: "Erc20FarmCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
    ],
    name: "Erc721FarmCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "WithdrawErc20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "WithdrawErc721",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_allocPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
    ],
    name: "createFarmErc20",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_appraiser",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_allocPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
    ],
    name: "createFarmErc721",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "depositErc721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "farmInfo",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "appraiser",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accSolacePerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valueStaked",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "farmIsErc20",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "farmIsErc721",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
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
    name: "massUpdateFarms",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numFarms",
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
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
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
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "setFarmParams",
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
        internalType: "uint256",
        name: "_solacePerBlock",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "setSolacePerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "solace",
    outputs: [
      {
        internalType: "contract SOLACE",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "solacePerBlock",
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
    name: "totalAllocPoints",
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
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
    ],
    name: "updateFarm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "withdrawErc721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_farmId",
        type: "uint256",
      },
    ],
    name: "withdrawRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611bad380380611bad83398101604081905261002f91610060565b600080546001600160a01b039093166001600160a01b03199384161790556001556008805490911633179055610098565b60008060408385031215610072578182fd5b82516001600160a01b0381168114610088578283fd5b6020939093015192949293505050565b611b06806100a76000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80637e0de2ef116100e3578063ab033ea91161008c578063cc430ced11610066578063cc430ced14610320578063e460a5f114610333578063ef7a848f146103465761018d565b8063ab033ea9146102e7578063b56203ea146102fa578063cbbc58301461030d5761018d565b806393f1a40b116100bd57806393f1a40b146102a057806398969e82146102c1578063a00c10c5146102d45761018d565b80637e0de2ef1461027d57806386f44c7b146102855780639342c8f41461028d5761018d565b80635aa6e6751161014557806372f9ab431161011f57806372f9ab431461023b5780637bafb029146102435780637d21c967146102565761018d565b80635aa6e675146102005780635b2ba13e146102085780635fbe2d0f146102285761018d565b806337c28e301161017657806337c28e30146101c55780633ef8d97e146101d85780635a9f7f37146101ed5761018d565b80631fa36cbe1461019257806336911e71146101b0575b600080fd5b61019a610359565b6040516101a791906119e0565b60405180910390f35b6101c36101be366004611661565b61035f565b005b6101c36101d3366004611661565b610476565b6101e0610571565b6040516101a79190611709565b61019a6101fb366004611537565b610580565b6101e061070b565b61021b6102163660046115d7565b61071a565b6040516101a7919061179e565b61021b6102363660046115d7565b61072f565b61019a610744565b61019a610251366004611682565b61074a565b6102696102643660046115d7565b6107be565b6040516101a7989796959493929190611741565b6101c361080e565b61019a61083a565b6101c361029b3660046115d7565b610840565b6102b36102ae366004611607565b6108b6565b6040516101a79291906119e9565b61019a6102cf366004611607565b6108da565b6101c36102e23660046116ad565b6109ec565b6101c36102f536600461151d565b610a97565b61019a610308366004611583565b610af0565b6101c361031b366004611661565b610c7b565b6101c361032e3660046115d7565b610e85565b6101c3610341366004611632565b610f78565b6101c3610354366004611661565b610fb6565b60025481565b60008281526005602052604090205460ff166103965760405162461bcd60e51b815260040161038d9061194c565b60405180910390fd5b6000828152600360209081526040808320600483528184203385529092529091206103c084611160565b828260070160008282546103d49190611a4e565b90915550508054839082906000906103ed908490611a4e565b90915550506006820154815464e8d4a510009161040991611a2f565b6104139190611a0f565b6001820155815461042e906001600160a01b031633856111e4565b83336001600160a01b03167f80d9737c00e0e8b21f8975768401361e6725bd1949f8ae8f1a5b3432c30c4e708560405161046891906119e0565b60405180910390a350505050565b60008281526005602052604090205460ff166104a45760405162461bcd60e51b815260040161038d9061194c565b6000828152600360209081526040808320600483528184203385529092529091206104ce84611160565b81546104e5906001600160a01b031633308661128e565b828260070160008282546104f991906119f7565b90915550508054839082906000906105129084906119f7565b90915550506006820154815464e8d4a510009161052e91611a2f565b6105389190611a0f565b6001820155604051849033907fd8cecff3c0bd0ccec12e33464a734adb8a717d778aac341c85757583c044a395906104689087906119e0565b6000546001600160a01b031681565b6008546000906001600160a01b031633146105ad5760405162461bcd60e51b815260040161038d906117dc565b60078054600091826105be83611a91565b909155506000818152600660205260408120805460ff191660011790556002805492935087929091906105f29084906119f7565b92505081905550604051806101000160405280886001600160a01b03168152602001876001600160a01b0316815260200186815260200185815260200184815260200161063f4387611313565b815260006020808301829052604092830182905284825260038082528383208551815473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b03928316178355938701516001830180549095169116179092558484015160028301556060850151908201556080840151600482015560a0840151600582015560c0840151600682015560e0909301516007909301929092555182917ff02c59f13ebfd02827560b7effbc3c8cd25d986bb9b62809a030fb82c7d0379191a29695505050505050565b6008546001600160a01b031681565b60056020526000908152604090205460ff1681565b60066020526000908152604090205460ff1681565b60015481565b6000600754841061075d575060006107b7565b600084815260036020819052604082209081015490919061077f908690611313565b9050600061079185846004015461132a565b9050808211156107a757600093505050506107b7565b6107b18282611a4e565b93505050505b9392505050565b6003602081905260009182526040909120805460018201546002830154938301546004840154600585015460068601546007909601546001600160a01b0395861697959094169592939192909188565b6007546000905b808210156108365761082682610e85565b61082f82611a91565b9150610815565b5050565b60075481565b60075481106108615760405162461bcd60e51b815260040161038d906118de565b61086a81611160565b6000818152600360209081526040808320600483528184203385529092529091206006820154815464e8d4a51000916108a291611a2f565b6108ac9190611a0f565b6001909101555050565b60046020908152600092835260408084209091529082529020805460019091015482565b600060075483106108ed575060006109e6565b6000838152600360209081526040808320600483528184206001600160a01b038716855290925290912060068201546005830154431180156109325750600783015415155b801561093f575060025415155b156109b35760006109558785600501544361074a565b9050600060025485600201546001548461096f9190611a2f565b6109799190611a2f565b6109839190611a0f565b600786015490915061099a8264e8d4a51000611a2f565b6109a49190611a0f565b6109ae90846119f7565b925050505b6001820154825464e8d4a51000906109cc908490611a2f565b6109d69190611a0f565b6109e09190611a4e565b93505050505b92915050565b6008546001600160a01b03163314610a165760405162461bcd60e51b815260040161038d906117dc565b6007548410610a375760405162461bcd60e51b815260040161038d906118de565b8015610a4557610a4561080e565b60008481526003602052604090206002908101549054610a669085906119f7565b610a709190611a4e565b60029081556000948552600360205260409094209384019290925560049092019190915550565b6008546001600160a01b03163314610ac15760405162461bcd60e51b815260040161038d906117dc565b6008805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6008546000906001600160a01b03163314610b1d5760405162461bcd60e51b815260040161038d906117dc565b6007805460009182610b2e83611a91565b909155506000818152600560205260408120805460ff19166001179055600280549293508792909190610b629084906119f7565b92505081905550604051806101000160405280876001600160a01b0316815260200160006001600160a01b03168152602001868152602001858152602001848152602001610bb04387611313565b815260006020808301829052604092830182905284825260038082528383208551815473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b03928316178355938701516001830180549095169116179092558484015160028301556060850151908201556080840151600482015560a0840151600582015560c0840151600682015560e0909301516007909301929092555182917f74b25210dfe3cf4a6cb260804763194d9d620cc4a5fa22028917fe6ba2b8bbf291a295945050505050565b60008281526006602052604090205460ff16610ca95760405162461bcd60e51b815260040161038d906118a7565b600082815260036020908152604080832060048352818420338552909252909120610cd384611160565b81546040516323b872dd60e01b81526001600160a01b03909116906323b872dd90610d069033903090889060040161171d565b600060405180830381600087803b158015610d2057600080fd5b505af1158015610d34573d6000803e3d6000fd5b505050506001820154604051631eadff2560e31b81526000916001600160a01b03169063f56ff92890610d6b9087906004016119e0565b60206040518083038186803b158015610d8357600080fd5b505afa158015610d97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dbb91906115ef565b905080836007016000828254610dd191906119f7565b9091555050815481908390600090610dea9084906119f7565b90915550506006830154825464e8d4a5100091610e0691611a2f565b610e109190611a0f565b60018084019190915560008581526002840160209081526040808320805460ff191690941790935560038501905281902082905551859033907fc17b6241d0858b652b07602f134b989d9cf8f47e6fdaf91d5238a726d4c4a98f90610e769088906119e0565b60405180910390a35050505050565b6007548110610e9357610f75565b600081815260036020526040902060058101544311610eb25750610f75565b60078101541580610ec35750600254155b15610ee157610ed643826004015461132a565b600590910155610f75565b6000610ef28383600501544361074a565b90506000600254836002015460015484610f0c9190611a2f565b610f169190611a2f565b610f209190611a0f565b6007840154909150610f378264e8d4a51000611a2f565b610f419190611a0f565b836006016000828254610f5491906119f7565b92505081905550610f6943846004015461132a565b83600501819055505050505b50565b6008546001600160a01b03163314610fa25760405162461bcd60e51b815260040161038d906117dc565b8015610fb057610fb061080e565b50600155565b60008281526006602052604090205460ff16610fe45760405162461bcd60e51b815260040161038d906118a7565b60008281526003602090815260408083206004835281842033855290925290912061100e84611160565b600083815260028201602052604090205460ff1661103e5760405162461bcd60e51b815260040161038d90611870565b600083815260038201602052604081205460078401805491928392611064908490611a4e565b909155505081548190839060009061107d908490611a4e565b90915550506006830154825464e8d4a510009161109991611a2f565b6110a39190611a0f565b6001830155600084815260028301602052604090819020805460ff1916905583549051632142170760e11b81526001600160a01b03909116906342842e0e906110f49030903390899060040161171d565b600060405180830381600087803b15801561110e57600080fd5b505af1158015611122573d6000803e3d6000fd5b5050505084336001600160a01b03167f431771bce67f0895d826284791919b16ea39405fb98173601b48d7cac46ba29c86604051610e7691906119e0565b60008181526003602090815260408083206004835281842033855290925290912061118a83610e85565b6000816001015464e8d4a51000846006015484600001546111ab9190611a2f565b6111b59190611a0f565b6111bf9190611a4e565b905080156111de576000546111de906001600160a01b031633836111e4565b50505050565b6040516370a0823160e01b81526000906001600160a01b038516906370a0823190611213903090600401611709565b60206040518083038186803b15801561122b57600080fd5b505afa15801561123f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126391906115ef565b90506000611271838361132a565b90506112876001600160a01b0386168583611339565b5050505050565b6111de846323b872dd60e01b8585856040516024016112af9392919061171d565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261135d565b60008183101561132357816107b7565b5090919050565b600081831061132357816107b7565b6113588363a9059cbb60e01b84846040516024016112af929190611785565b505050565b60006113b2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113ec9092919063ffffffff16565b80519091501561135857808060200190518101906113d091906115bb565b6113585760405162461bcd60e51b815260040161038d90611983565b60606113fb8484600085611403565b949350505050565b6060824710156114255760405162461bcd60e51b815260040161038d90611813565b61142e856114c3565b61144a5760405162461bcd60e51b815260040161038d90611915565b600080866001600160a01b0316858760405161146691906116ed565b60006040518083038185875af1925050503d80600081146114a3576040519150601f19603f3d011682016040523d82523d6000602084013e6114a8565b606091505b50915091506114b88282866114cd565b979650505050505050565b803b15155b919050565b606083156114dc5750816107b7565b8251156114ec5782518084602001fd5b8160405162461bcd60e51b815260040161038d91906117a9565b80356001600160a01b03811681146114c857600080fd5b60006020828403121561152e578081fd5b6107b782611506565b600080600080600060a0868803121561154e578081fd5b61155786611506565b945061156560208701611506565b94979496505050506040830135926060810135926080909101359150565b60008060008060808587031215611598578384fd5b6115a185611506565b966020860135965060408601359560600135945092505050565b6000602082840312156115cc578081fd5b81516107b781611ac2565b6000602082840312156115e8578081fd5b5035919050565b600060208284031215611600578081fd5b5051919050565b60008060408385031215611619578182fd5b8235915061162960208401611506565b90509250929050565b60008060408385031215611644578182fd5b82359150602083013561165681611ac2565b809150509250929050565b60008060408385031215611673578182fd5b50508035926020909101359150565b600080600060608486031215611696578283fd5b505081359360208301359350604090920135919050565b600080600080608085870312156116c2578384fd5b84359350602085013592506040850135915060608501356116e281611ac2565b939692955090935050565b600082516116ff818460208701611a65565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03988916815296909716602087015260408601949094526060850192909252608084015260a083015260c082015260e08101919091526101000190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60006020825282518060208401526117c8816040850160208701611a65565b601f01601f19169190910160400192915050565b6020808252600b908201527f21676f7665726e616e6365000000000000000000000000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b6020808252600e908201527f6e6f7420796f757220746f6b656e000000000000000000000000000000000000604082015260600190565b60208082526012908201527f6e6f7420616e20657263373231206661726d0000000000000000000000000000604082015260600190565b60208082526013908201527f6661726d20646f6573206e6f7420657869737400000000000000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526011908201527f6e6f7420616e206572633230206661726d000000000000000000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b918252602082015260400190565b60008219821115611a0a57611a0a611aac565b500190565b600082611a2a57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611a4957611a49611aac565b500290565b600082821015611a6057611a60611aac565b500390565b60005b83811015611a80578181015183820152602001611a68565b838111156111de5750506000910152565b6000600019821415611aa557611aa5611aac565b5060010190565b634e487b7160e01b600052601160045260246000fd5b8015158114610f7557600080fdfea2646970667358221220495a21c1dda72f65f0c2a0013bbaf003548f9e113bc983fb590378c8bfa85ebd64736f6c63430008000033";