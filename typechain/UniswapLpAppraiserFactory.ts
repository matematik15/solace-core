/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapLpAppraiser } from "./UniswapLpAppraiser";

export class UniswapLpAppraiserFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _contract: string,
    overrides?: Overrides
  ): Promise<UniswapLpAppraiser> {
    return super.deploy(
      _contract,
      overrides || {}
    ) as Promise<UniswapLpAppraiser>;
  }
  getDeployTransaction(
    _contract: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_contract, overrides || {});
  }
  attach(address: string): UniswapLpAppraiser {
    return super.attach(address) as UniswapLpAppraiser;
  }
  connect(signer: Signer): UniswapLpAppraiserFactory {
    return super.connect(signer) as UniswapLpAppraiserFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapLpAppraiser {
    return new Contract(address, _abi, signerOrProvider) as UniswapLpAppraiser;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "appraise",
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
    name: "nftContract",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    name: "poolValue",
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
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "_fee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setPoolValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161069738038061069783398101604081905261002f9161005d565b600280546001600160a01b039092166001600160a01b0319928316179055600180549091163317905561008b565b60006020828403121561006e578081fd5b81516001600160a01b0381168114610084578182fd5b9392505050565b6105fd8061009a6000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063ce18116311610050578063ce181163146100bd578063d56d229d146100dd578063f56ff928146100e557610072565b80635aa6e67514610077578063ab033ea914610095578063bc96adad146100aa575b600080fd5b61007f6100f8565b60405161008c919061051f565b60405180910390f35b6100a86100a336600461036b565b610107565b005b6100a86100b83660046103d8565b610174565b6100d06100cb36600461038e565b6101f8565b60405161008c919061056a565b61007f61021a565b6100d06100f3366004610428565b610229565b6001546001600160a01b031681565b6001546001600160a01b0316331461013a5760405162461bcd60e51b815260040161013190610533565b60405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6001546001600160a01b0316331461019e5760405162461bcd60e51b815260040161013190610533565b6001600160a01b039384166000818152602081815260408083209690971680835295815286822062ffffff909516808352948152868220849055948152808552858120918152908452848120928152919092529190912055565b6000602081815293815260408082208552928152828120909352825290205481565b6002546001600160a01b031681565b60025460405163133f757160e31b815260009182918291829182916001600160a01b0316906399fbab889061026290899060040161056a565b6101806040518083038186803b15801561027b57600080fd5b505afa15801561028f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b39190610440565b505050506001600160a01b03868116600090815260208181526040808320938916835292815282822062ffffff8816835290522054959b509399509197509195506103179450919250506fffffffffffffffffffffffffffffffff84169050610573565b9450505050505b919050565b805161031e8161059e565b8051600281900b811461031e57600080fd5b80516fffffffffffffffffffffffffffffffff8116811461031e57600080fd5b805161031e816105b6565b60006020828403121561037c578081fd5b81356103878161059e565b9392505050565b6000806000606084860312156103a2578182fd5b83356103ad8161059e565b925060208401356103bd8161059e565b915060408401356103cd816105b6565b809150509250925092565b600080600080608085870312156103ed578081fd5b84356103f88161059e565b935060208501356104088161059e565b92506040850135610418816105b6565b9396929550929360600135925050565b600060208284031215610439578081fd5b5035919050565b6000806000806000806000806000806000806101808d8f031215610462578788fd5b8c516bffffffffffffffffffffffff8116811461047d578889fd5b9b5061048b60208e01610323565b9a5061049960408e01610323565b99506104a760608e01610323565b98506104b560808e01610360565b97506104c360a08e0161032e565b96506104d160c08e0161032e565b95506104df60e08e01610340565b94506101008d015193506101208d015192506104fe6101408e01610340565b915061050d6101608e01610340565b90509295989b509295989b509295989b565b6001600160a01b0391909116815260200190565b6020808252600b908201527f21676f7665726e616e6365000000000000000000000000000000000000000000604082015260600190565b90815260200190565b600081600019048311821515161561059957634e487b7160e01b81526011600452602481fd5b500290565b6001600160a01b03811681146105b357600080fd5b50565b62ffffff811681146105b357600080fdfea26469706673582212205df027c80d0a4826238ad2f55764033a9218ac1ba8956c63fadc5a08ec33604a64736f6c63430008000033";
