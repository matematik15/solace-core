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
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "farmId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "farmId",
        type: "uint256",
      },
    ],
    name: "FarmCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "farmId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
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
    name: "createFarm",
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
    name: "deposit",
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
        internalType: "contract IERC20",
        name: "token",
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
        name: "tokensStaked",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "farmLength",
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
        name: "amount",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006002553480156200001657600080fd5b506040516200242f3803806200242f83398181016040528101906200003c9190620000fa565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060018190555033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620001c1565b600081519050620000dd816200018d565b92915050565b600081519050620000f481620001a7565b92915050565b600080604083850312156200010e57600080fd5b60006200011e85828601620000cc565b92505060206200013185828601620000e3565b9150509250929050565b6000620001488262000163565b9050919050565b60006200015c826200013b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b62000198816200014f565b8114620001a457600080fd5b50565b620001b28162000183565b8114620001be57600080fd5b50565b61225e80620001d16000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638a48a515116100a2578063ab033ea911610071578063ab033ea9146102af578063ca7cd254146102cb578063cc430ced146102fb578063e2bbb15814610317578063e460a5f1146103335761010b565b80638a48a5151461021457806393f1a40b1461023257806398969e8214610263578063a00c10c5146102935761010b565b806372f9ab43116100de57806372f9ab43146101865780637bafb029146101a45780637d21c967146101d45780637e0de2ef1461020a5761010b565b80631fa36cbe146101105780633ef8d97e1461012e578063441a3e701461014c5780635aa6e67514610168575b600080fd5b61011861034f565b6040516101259190611edd565b60405180910390f35b610136610355565b6040516101439190611de0565b60405180910390f35b6101666004803603810190610161919061197f565b610379565b005b61017061062a565b60405161017d9190611cf6565b60405180910390f35b61018e610650565b60405161019b9190611edd565b60405180910390f35b6101be60048036038101906101b991906119bb565b610656565b6040516101cb9190611edd565b60405180910390f35b6101ee60048036038101906101e991906118b5565b61070a565b6040516102019796959493929190611d71565b60405180910390f35b61021261077c565b005b61021c6107af565b6040516102299190611edd565b60405180910390f35b61024c60048036038101906102479190611907565b6107bc565b60405161025a929190611ef8565b60405180910390f35b61027d60048036038101906102789190611907565b6107f9565b60405161028a9190611edd565b60405180910390f35b6102ad60048036038101906102a89190611a0a565b6109c2565b005b6102c960048036038101906102c49190611800565b610bb8565b005b6102e560048036038101906102e09190611829565b610c8c565b6040516102f29190611edd565b60405180910390f35b610315600480360381019061031091906118b5565b610e9b565b005b610331600480360381019061032c919061197f565b610fd7565b005b61034d60048036038101906103489190611943565b611271565b005b60025481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038054905082106103c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b790611e7d565b60405180910390fd5b6000600383815481106103fc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600702019050600060048481548110610448577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905082816000015410156104d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cf90611e1d565b60405180910390fd5b6104e184610e9b565b6000816001015464e8d4a51000846005015484600001546105029190611fda565b61050c9190611fa9565b6105169190612034565b905061054360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16338361131b565b838360060160008282546105579190612034565b92505081905550838260000160008282546105729190612034565b9250508190555064e8d4a51000836005015483600001546105939190611fda565b61059d9190611fa9565b82600101819055506105d48360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16338661131b565b843373ffffffffffffffffffffffffffffffffffffffff167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5688660405161061b9190611edd565b60405180910390a35050505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b6000600380549050841061066d5760009050610703565b6000600385815481106106a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060070201905060006106c98583600201546113e8565b905060006106db858460030154611402565b9050808211156106f15760009350505050610703565b81816106fd9190612034565b93505050505b9392505050565b6003818154811061071a57600080fd5b90600052602060002090600702016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050154908060060154905087565b6000600380549050905060005b818110156107ab5761079a81610e9b565b806107a49061212b565b9050610789565b5050565b6000600380549050905090565b600482815481106107cc57600080fd5b90600052602060002001602052806000526040600020600091509150508060000154908060010154905082565b6000600380549050831061081057600090506109bc565b60006003848154811061084c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600702019050600060048581548110610898577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008260050154905082600401544311801561090257506000836006015414155b80156109115750600060025414155b1561098757600061092787856004015443610656565b905060006002548560010154600154846109419190611fda565b61094b9190611fda565b6109559190611fa9565b9050846006015464e8d4a510008261096d9190611fda565b6109779190611fa9565b836109829190611f53565b925050505b816001015464e8d4a510008284600001546109a29190611fda565b6109ac9190611fa9565b6109b69190612034565b93505050505b92915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4990611e3d565b60405180910390fd5b6003805490508410610a99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9090611e7d565b60405180910390fd5b8015610aa857610aa761077c565b5b60038481548110610ae2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600702016001015483600254610b029190611f53565b610b0c9190612034565b6002819055508260038581548110610b4d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060070201600101819055508160038581548110610b9d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600702016003018190555050505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3f90611e3d565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1590611e3d565b60405180910390fd5b600060038054905090508460026000828254610d3a9190611f53565b9250508190555060036040518060e001604052808873ffffffffffffffffffffffffffffffffffffffff168152602001878152602001868152602001858152602001610d8643886113e8565b8152602001600081526020016000815250908060018154018082558091505060019003906000526020600020906007020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015550506004600181600181540180825580915050039060005260206000205050807f1a1727f75910df73468b349eaa462a5381eb4f3fd267975d354d552f661b82cf60405160405180910390a280915050949350505050565b6003805490508110610eac57610fd4565b600060038281548110610ee8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060070201905080600401544311610f095750610fd4565b600081600601541480610f1e57506000600254145b15610f3f57610f31438260030154611402565b816004018190555050610fd4565b6000610f5083836004015443610656565b90506000600254836001015460015484610f6a9190611fda565b610f749190611fda565b610f7e9190611fa9565b9050826006015464e8d4a5100082610f969190611fda565b610fa09190611fa9565b836005016000828254610fb39190611f53565b92505081905550610fc8438460030154611402565b83600401819055505050505b50565b600380549050821061101e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101590611e7d565b60405180910390fd5b60006003838154811061105a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906007020190506000600484815481106110a6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506110f884610e9b565b600081600001541115611169576000816001015464e8d4a51000846005015484600001546111269190611fda565b6111309190611fa9565b61113a9190612034565b905061116760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16338361131b565b505b6111ba3330858560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661141b909392919063ffffffff16565b828260060160008282546111ce9190611f53565b92505081905550828160000160008282546111e99190611f53565b9250508190555064e8d4a510008260050154826000015461120a9190611fda565b6112149190611fa9565b8160010181905550833373ffffffffffffffffffffffffffffffffffffffff167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15856040516112639190611edd565b60405180910390a350505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611301576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f890611e3d565b60405180910390fd5b80156113105761130f61077c565b5b816001819055505050565b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016113569190611cf6565b60206040518083038186803b15801561136e57600080fd5b505afa158015611382573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a691906118de565b905060006113b48383611402565b90506113e184828773ffffffffffffffffffffffffffffffffffffffff166114a49092919063ffffffff16565b5050505050565b6000818310156113f857816113fa565b825b905092915050565b60008183106114115781611413565b825b905092915050565b61149e846323b872dd60e01b85858560405160240161143c93929190611d11565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061152a565b50505050565b6115258363a9059cbb60e01b84846040516024016114c3929190611d48565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061152a565b505050565b600061158c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115f19092919063ffffffff16565b90506000815111156115ec57808060200190518101906115ac919061188c565b6115eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e290611ebd565b60405180910390fd5b5b505050565b60606116008484600085611609565b90509392505050565b60608247101561164e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164590611e5d565b60405180910390fd5b6116578561171d565b611696576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168d90611e9d565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516116bf9190611cdf565b60006040518083038185875af1925050503d80600081146116fc576040519150601f19603f3d011682016040523d82523d6000602084013e611701565b606091505b5091509150611711828286611730565b92505050949350505050565b600080823b905060008111915050919050565b6060831561174057829050611790565b6000835111156117535782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117879190611dfb565b60405180910390fd5b9392505050565b6000813590506117a6816121e3565b92915050565b6000813590506117bb816121fa565b92915050565b6000815190506117d0816121fa565b92915050565b6000813590506117e581612211565b92915050565b6000815190506117fa81612211565b92915050565b60006020828403121561181257600080fd5b600061182084828501611797565b91505092915050565b6000806000806080858703121561183f57600080fd5b600061184d87828801611797565b945050602061185e878288016117d6565b935050604061186f878288016117d6565b9250506060611880878288016117d6565b91505092959194509250565b60006020828403121561189e57600080fd5b60006118ac848285016117c1565b91505092915050565b6000602082840312156118c757600080fd5b60006118d5848285016117d6565b91505092915050565b6000602082840312156118f057600080fd5b60006118fe848285016117eb565b91505092915050565b6000806040838503121561191a57600080fd5b6000611928858286016117d6565b925050602061193985828601611797565b9150509250929050565b6000806040838503121561195657600080fd5b6000611964858286016117d6565b9250506020611975858286016117ac565b9150509250929050565b6000806040838503121561199257600080fd5b60006119a0858286016117d6565b92505060206119b1858286016117d6565b9150509250929050565b6000806000606084860312156119d057600080fd5b60006119de868287016117d6565b93505060206119ef868287016117d6565b9250506040611a00868287016117d6565b9150509250925092565b60008060008060808587031215611a2057600080fd5b6000611a2e878288016117d6565b9450506020611a3f878288016117d6565b9350506040611a50878288016117d6565b9250506060611a61878288016117ac565b91505092959194509250565b611a7681612068565b82525050565b6000611a8782611f21565b611a918185611f37565b9350611aa18185602086016120f8565b80840191505092915050565b611ab6816120b0565b82525050565b611ac5816120d4565b82525050565b6000611ad682611f2c565b611ae08185611f42565b9350611af08185602086016120f8565b611af9816121d2565b840191505092915050565b6000611b11600c83611f42565b91507f696e73756666696369656e7400000000000000000000000000000000000000006000830152602082019050919050565b6000611b51600b83611f42565b91507f21676f7665726e616e63650000000000000000000000000000000000000000006000830152602082019050919050565b6000611b91602683611f42565b91507f416464726573733a20696e73756666696369656e742062616c616e636520666f60008301527f722063616c6c00000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611bf7601383611f42565b91507f6661726d20646f6573206e6f74206578697374000000000000000000000000006000830152602082019050919050565b6000611c37601d83611f42565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b6000611c77602a83611f42565b91507f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008301527f6f742073756363656564000000000000000000000000000000000000000000006020830152604082019050919050565b611cd9816120a6565b82525050565b6000611ceb8284611a7c565b915081905092915050565b6000602082019050611d0b6000830184611a6d565b92915050565b6000606082019050611d266000830186611a6d565b611d336020830185611a6d565b611d406040830184611cd0565b949350505050565b6000604082019050611d5d6000830185611a6d565b611d6a6020830184611cd0565b9392505050565b600060e082019050611d86600083018a611aad565b611d936020830189611cd0565b611da06040830188611cd0565b611dad6060830187611cd0565b611dba6080830186611cd0565b611dc760a0830185611cd0565b611dd460c0830184611cd0565b98975050505050505050565b6000602082019050611df56000830184611abc565b92915050565b60006020820190508181036000830152611e158184611acb565b905092915050565b60006020820190508181036000830152611e3681611b04565b9050919050565b60006020820190508181036000830152611e5681611b44565b9050919050565b60006020820190508181036000830152611e7681611b84565b9050919050565b60006020820190508181036000830152611e9681611bea565b9050919050565b60006020820190508181036000830152611eb681611c2a565b9050919050565b60006020820190508181036000830152611ed681611c6a565b9050919050565b6000602082019050611ef26000830184611cd0565b92915050565b6000604082019050611f0d6000830185611cd0565b611f1a6020830184611cd0565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000611f5e826120a6565b9150611f69836120a6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f9e57611f9d612174565b5b828201905092915050565b6000611fb4826120a6565b9150611fbf836120a6565b925082611fcf57611fce6121a3565b5b828204905092915050565b6000611fe5826120a6565b9150611ff0836120a6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561202957612028612174565b5b828202905092915050565b600061203f826120a6565b915061204a836120a6565b92508282101561205d5761205c612174565b5b828203905092915050565b600061207382612086565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006120bb826120c2565b9050919050565b60006120cd82612086565b9050919050565b60006120df826120e6565b9050919050565b60006120f182612086565b9050919050565b60005b838110156121165780820151818401526020810190506120fb565b83811115612125576000848401525b50505050565b6000612136826120a6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561216957612168612174565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b6121ec81612068565b81146121f757600080fd5b50565b6122038161207a565b811461220e57600080fd5b50565b61221a816120a6565b811461222557600080fd5b5056fea264697066735822122096554e057d84d6e390603975e5b06b4f1dd2a1937113313e13a5bd699bd9678764736f6c63430008000033";
