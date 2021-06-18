/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AaveV2Product } from "./AaveV2Product";

export class AaveV2ProductFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _policyManager: string,
    _treasury: string,
    _coveredPlatform: string,
    _claimsAdjuster: string,
    _price: BigNumberish,
    _cancelFee: BigNumberish,
    _minPeriod: BigNumberish,
    _maxPeriod: BigNumberish,
    _maxCoverAmount: BigNumberish,
    _quoter: string,
    overrides?: Overrides
  ): Promise<AaveV2Product> {
    return super.deploy(
      _policyManager,
      _treasury,
      _coveredPlatform,
      _claimsAdjuster,
      _price,
      _cancelFee,
      _minPeriod,
      _maxPeriod,
      _maxCoverAmount,
      _quoter,
      overrides || {}
    ) as Promise<AaveV2Product>;
  }
  getDeployTransaction(
    _policyManager: string,
    _treasury: string,
    _coveredPlatform: string,
    _claimsAdjuster: string,
    _price: BigNumberish,
    _cancelFee: BigNumberish,
    _minPeriod: BigNumberish,
    _maxPeriod: BigNumberish,
    _maxCoverAmount: BigNumberish,
    _quoter: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _policyManager,
      _treasury,
      _coveredPlatform,
      _claimsAdjuster,
      _price,
      _cancelFee,
      _minPeriod,
      _maxPeriod,
      _maxCoverAmount,
      _quoter,
      overrides || {}
    );
  }
  attach(address: string): AaveV2Product {
    return super.attach(address) as AaveV2Product;
  }
  connect(signer: Signer): AaveV2ProductFactory {
    return super.connect(signer) as AaveV2ProductFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveV2Product {
    return new Contract(address, _abi, signerOrProvider) as AaveV2Product;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPolicyManager",
        name: "_policyManager",
        type: "address",
      },
      {
        internalType: "contract ITreasury",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coveredPlatform",
        type: "address",
      },
      {
        internalType: "address",
        name: "_claimsAdjuster",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cancelFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxCoverAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_quoter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "policyID",
        type: "uint256",
      },
    ],
    name: "PolicyCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "policyID",
        type: "uint256",
      },
    ],
    name: "PolicyCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "policyID",
        type: "uint256",
      },
    ],
    name: "PolicyExtended",
    type: "event",
  },
  {
    inputs: [],
    name: "activeCoverAmount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "activePolicyIDs",
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
        name: "_policyholder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionContract",
        type: "address",
      },
    ],
    name: "appraisePosition",
    outputs: [
      {
        internalType: "uint256",
        name: "positionAmount",
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
        name: "_policyholder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_coverLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_blocks",
        type: "uint256",
      },
    ],
    name: "buyPolicy",
    outputs: [
      {
        internalType: "uint256",
        name: "policyID",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelFee",
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
        name: "_policyID",
        type: "uint256",
      },
    ],
    name: "cancelPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimsAdjuster",
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
    name: "coveredPlatform",
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
        internalType: "uint256",
        name: "_policyID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_blocks",
        type: "uint256",
      },
    ],
    name: "extendPolicy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_policyholder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_coverLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_blocks",
        type: "uint256",
      },
    ],
    name: "getQuote",
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
    name: "maxCoverAmount",
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
    name: "maxPeriod",
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
    name: "minPeriod",
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
    name: "policyManager",
    outputs: [
      {
        internalType: "contract IPolicyManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
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
    name: "productPolicyCount",
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
    name: "provider",
    outputs: [
      {
        internalType: "contract IAaveProtocolDataProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "quoter",
    outputs: [
      {
        internalType: "contract IExchangeQuoter",
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
        name: "_cancelFee",
        type: "uint256",
      },
    ],
    name: "setCancelFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_claimsAdjuster",
        type: "address",
      },
    ],
    name: "setClaimsAdjuster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_quoter",
        type: "address",
      },
    ],
    name: "setExchangeQuoter",
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
        name: "_maxCoverAmount",
        type: "uint256",
      },
    ],
    name: "setMaxCoverAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxPeriod",
        type: "uint256",
      },
    ],
    name: "setMaxPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minPeriod",
        type: "uint256",
      },
    ],
    name: "setMinPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "contract ITreasury",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateActivePolicies",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001cd738038062001cd78339810160408190526200003491620000ce565b60008054336001600160a01b03199182161782556001805482166001600160a01b039d8e161790556002805482169b8d169b909b17909a55600380548b16998c16998a179055600480548b16988c1698909817909755600595909555600693909355600791909155600855600955600a829055600b91909155600d80548416909217909155600e8054909216921691909117905562000199565b6000806000806000806000806000806101408b8d031215620000ee578586fd5b8a51620000fb8162000180565b60208c0151909a506200010e8162000180565b60408c0151909950620001218162000180565b60608c0151909850620001348162000180565b8097505060808b0151955060a08b0151945060c08b0151935060e08b015192506101008b015191506101208b01516200016d8162000180565b809150509295989b9194979a5092959850565b6001600160a01b03811681146200019657600080fd5b50565b611b2e80620001a96000396000f3fe6080604052600436106101c25760003560e01c80639badf072116100f7578063b20e8bcc11610095578063db38c82a11610064578063db38c82a14610466578063f821076914610486578063f862701f146104a6578063ffd49c84146104c6576101c2565b8063b20e8bcc146103fe578063c2fffd6b1461041e578063c68319281461043e578063c6bbd5a714610451576101c2565b8063a0c0bc6b116100d1578063a0c0bc6b14610396578063ab033ea9146103a9578063ab3dbf3b146103c9578063ae1c9fc1146103de576101c2565b80639badf072146103495780639e9851c61461036c578063a035b1fe14610381576101c2565b80635d3fd3da116101645780637e9e1abe1161013e5780637e9e1abe146102ea57806381114341146102ff57806388f6f4671461031457806391b7f5ed14610329576101c2565b80635d3fd3da1461029557806361d027b3146102b557806374ac7b3d146102ca576101c2565b8063294b039b116101a0578063294b039b1461022957806346c7201f1461024b57806349b9a67f1461026b5780635aa6e67514610280576101c2565b8063085d4883146101c757806314025dcd146101f257806319baf2d414610214575b600080fd5b3480156101d357600080fd5b506101dc6104db565b6040516101e99190611760565b60405180910390f35b3480156101fe57600080fd5b506102076104ea565b6040516101e991906119f9565b34801561022057600080fd5b506102076104f0565b34801561023557600080fd5b5061024961024436600461170f565b6104f6565b005b34801561025757600080fd5b5061020761026636600461170f565b61052e565b34801561027757600080fd5b5061020761054f565b34801561028c57600080fd5b506101dc610555565b3480156102a157600080fd5b506102496102b0366004611607565b610564565b3480156102c157600080fd5b506101dc6105bd565b3480156102d657600080fd5b506102496102e5366004611607565b6105cc565b3480156102f657600080fd5b50610207610625565b34801561030b57600080fd5b5061020761062b565b34801561032057600080fd5b506101dc610631565b34801561033557600080fd5b5061024961034436600461170f565b610640565b34801561035557600080fd5b5061035e61066f565b6040516101e9929190611a36565b34801561037857600080fd5b506101dc610686565b34801561038d57600080fd5b50610207610695565b6102076103a43660046116ca565b61069b565b3480156103b557600080fd5b506102496103c4366004611607565b610951565b3480156103d557600080fd5b506101dc6109aa565b3480156103ea57600080fd5b506102496103f936600461170f565b6109b9565b34801561040a57600080fd5b5061024961041936600461170f565b6109e8565b34801561042a57600080fd5b5061024961043936600461170f565b610ce1565b61024961044c36600461173f565b610d10565b34801561045d57600080fd5b506101dc6110c5565b34801561047257600080fd5b50610207610481366004611646565b6110d4565b34801561049257600080fd5b506102496104a136600461170f565b611315565b3480156104b257600080fd5b506102076104c13660046116ca565b611344565b3480156104d257600080fd5b50610207611368565b600d546001600160a01b031681565b60065481565b600a5481565b6000546001600160a01b031633146105295760405162461bcd60e51b8152600401610520906117be565b60405180910390fd5b600955565b600c818154811061053e57600080fd5b600091825260209091200154905081565b60085481565b6000546001600160a01b031681565b6000546001600160a01b0316331461058e5760405162461bcd60e51b8152600401610520906117be565b600e805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b6000546001600160a01b031633146105f65760405162461bcd60e51b8152600401610520906117be565b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600b5481565b60095481565b6003546001600160a01b031681565b6000546001600160a01b0316331461066a5760405162461bcd60e51b8152600401610520906117be565b600555565b60008061067a61136e565b5050600b54600c549091565b6004546001600160a01b031681565b60055481565b6000806106a886866110d4565b9050806106c75760405162461bcd60e51b8152600401610520906117f5565b60006127106106d68387611a7c565b6106e09190611a5c565b905060095481600b546106f39190611a44565b11156107115760405162461bcd60e51b815260040161052090611954565b600061071e8686856115c7565b905080341015801561072f57508015155b61074b5760405162461bcd60e51b815260040161052090611889565b600754851015801561075f57506008548511155b61077b5760405162461bcd60e51b8152600401610520906118e6565b60008611801561078d57506127108611155b6107a95760405162461bcd60e51b81526004016105209061198b565b600260009054906101000a90046001600160a01b03166001600160a01b031663439370b1826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156107f957600080fd5b505af115801561080d573d6000803e3d6000fd5b5050505050600085436108209190611a44565b600154600554604051630782b7df60e01b81529293506001600160a01b0390911691630782b7df9161085c918d918d9187918a91600401611774565b602060405180830381600087803b15801561087657600080fd5b505af115801561088a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ae9190611727565b945082600b60008282546108c29190611a44565b9091555050600c805460018101825560009182527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c701869055600a80549161090983611ab2565b91905055507fde5ef345cecbaaffdfbe2454b7947aa14037bac2f45e4fc98976f8bffea386238560405161093d91906119f9565b60405180910390a150505050949350505050565b6000546001600160a01b0316331461097b5760405162461bcd60e51b8152600401610520906117be565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546001600160a01b031681565b6000546001600160a01b031633146109e35760405162461bcd60e51b8152600401610520906117be565b600855565b6001546040516331d3b0f960e11b815233916001600160a01b0316906363a761f290610a189085906004016119f9565b60206040518083038186803b158015610a3057600080fd5b505afa158015610a44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a68919061162a565b6001600160a01b031614610a8e5760405162461bcd60e51b8152600401610520906119c2565b600154604051637b206e5d60e01b815260009143916001600160a01b0390911690637b206e5d90610ac39086906004016119f9565b60206040518083038186803b158015610adb57600080fd5b505afa158015610aef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b139190611727565b610b1d9190611a9b565b60015460405163d22fb44960e01b81529192506000916001600160a01b039091169063d22fb44990610b539086906004016119f9565b60206040518083038186803b158015610b6b57600080fd5b505afa158015610b7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba39190611727565b610bad9083611a7c565b90506006548111610bd05760405162461bcd60e51b81526004016105209061182c565b600154604051630852cd8d60e31b81526001600160a01b03909116906342966c6890610c009086906004016119f9565b600060405180830381600087803b158015610c1a57600080fd5b505af1158015610c2e573d6000803e3d6000fd5b50506002546006546001600160a01b03909116925063410085df91503390610c569085611a9b565b6040518363ffffffff1660e01b8152600401610c739291906117a5565b600060405180830381600087803b158015610c8d57600080fd5b505af1158015610ca1573d6000803e3d6000fd5b505050507f51705177697daa320000a2e9359d611c199200a0428ac3d7d834d6fd0b5a234b83604051610cd491906119f9565b60405180910390a1505050565b6000546001600160a01b03163314610d0b5760405162461bcd60e51b8152600401610520906117be565b600655565b6001546040516331d3b0f960e11b81526000916001600160a01b0316906363a761f290610d419086906004016119f9565b60206040518083038186803b158015610d5957600080fd5b505afa158015610d6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d91919061162a565b90506001600160a01b0381163314610dbb5760405162461bcd60e51b8152600401610520906119c2565b600154604051632223de1b60e01b81526000916001600160a01b031690632223de1b90610dec9087906004016119f9565b60206040518083038186803b158015610e0457600080fd5b505afa158015610e18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3c9190611727565b9050600064e8d4a510006005548584610e559190611a7c565b610e5f9190611a7c565b610e699190611a5c565b9050803410158015610e7a57508015155b610e965760405162461bcd60e51b815260040161052090611889565b600260009054906101000a90046001600160a01b03166001600160a01b031663439370b1826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610ee657600080fd5b505af1158015610efa573d6000803e3d6000fd5b5050600154604051637b206e5d60e01b8152600094508893506001600160a01b039091169150637b206e5d90610f34908a906004016119f9565b60206040518083038186803b158015610f4c57600080fd5b505afa158015610f60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f849190611727565b610f8e9190611a44565b60015460405163302544ef60e11b81529192506000916001600160a01b039091169063604a89de90610fc4908a906004016119f9565b60206040518083038186803b158015610fdc57600080fd5b505afa158015610ff0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611014919061162a565b6001546005546040516381badf3960e01b81529293506001600160a01b03909116916381badf3991611053918b918a91879189918c9190600401611a02565b600060405180830381600087803b15801561106d57600080fd5b505af1158015611081573d6000803e3d6000fd5b505050507f89e141a4cbec44a61a9ba33d0f18534d76da74909f66ba62cfe1c6d094711b28876040516110b491906119f9565b60405180910390a150505050505050565b600e546001600160a01b031681565b6000808290506000816001600160a01b031663b16a19de6040518163ffffffff1660e01b815260040160206040518083038186803b15801561111557600080fd5b505afa158015611129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114d919061162a565b600d546040516334924edb60e21b81529192506000916001600160a01b039091169063d2493b6c90611183908590600401611760565b60606040518083038186803b15801561119b57600080fd5b505afa1580156111af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d3919061167e565b50509050806001600160a01b0316856001600160a01b0316146112085760405162461bcd60e51b81526004016105209061191d565b6040516370a0823160e01b81526000906001600160a01b038516906370a0823190611237908a90600401611760565b60206040518083038186803b15801561124f57600080fd5b505afa158015611263573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112879190611727565b600e54604051630962df2960e21b81529192506001600160a01b03169063258b7ca4906112ba90869085906004016117a5565b60206040518083038186803b1580156112d257600080fd5b505afa1580156112e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130a9190611727565b979650505050505050565b6000546001600160a01b0316331461133f5760405162461bcd60e51b8152600401610520906117be565b600755565b60008061135186866110d4565b905061135e8484836115c7565b9695505050505050565b60075481565b60005b600c548110156115c457600154600c805443926001600160a01b031691637b206e5d91859081106113b257634e487b7160e01b600052603260045260246000fd5b90600052602060002001546040518263ffffffff1660e01b81526004016113d991906119f9565b60206040518083038186803b1580156113f157600080fd5b505afa158015611405573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114299190611727565b10156115b257600154600c80546001600160a01b0390921691632223de1b91908490811061146757634e487b7160e01b600052603260045260246000fd5b90600052602060002001546040518263ffffffff1660e01b815260040161148e91906119f9565b60206040518083038186803b1580156114a657600080fd5b505afa1580156114ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114de9190611727565b600b60008282546114ef9190611a9b565b9091555050600154600c80546001600160a01b03909216916342966c6891908490811061152c57634e487b7160e01b600052603260045260246000fd5b90600052602060002001546040518263ffffffff1660e01b815260040161155391906119f9565b600060405180830381600087803b15801561156d57600080fd5b505af1158015611581573d6000803e3d6000fd5b50505050600c81815481106115a657634e487b7160e01b600052603260045260246000fd5b60009182526020822001555b806115bc81611ab2565b915050611371565b50565b6000662386f26fc100006005548486856115e19190611a7c565b6115eb9190611a7c565b6115f59190611a7c565b6115ff9190611a5c565b949350505050565b600060208284031215611618578081fd5b813561162381611ae3565b9392505050565b60006020828403121561163b578081fd5b815161162381611ae3565b60008060408385031215611658578081fd5b823561166381611ae3565b9150602083013561167381611ae3565b809150509250929050565b600080600060608486031215611692578081fd5b835161169d81611ae3565b60208501519093506116ae81611ae3565b60408501519092506116bf81611ae3565b809150509250925092565b600080600080608085870312156116df578081fd5b84356116ea81611ae3565b935060208501356116fa81611ae3565b93969395505050506040820135916060013590565b600060208284031215611720578081fd5b5035919050565b600060208284031215611738578081fd5b5051919050565b60008060408385031215611751578182fd5b50508035926020909101359150565b6001600160a01b0391909116815260200190565b6001600160a01b03958616815293909416602084015260408301919091526060820152608081019190915260a00190565b6001600160a01b03929092168252602082015260400190565b6020808252600b908201527f21676f7665726e616e6365000000000000000000000000000000000000000000604082015260600190565b60208082526013908201527f7a65726f20706f736974696f6e2076616c756500000000000000000000000000604082015260600190565b60208082526027908201527f726566756e6420616d6f756e74206c657373207468616e2063616e63656c617460408201527f696f6e2066656500000000000000000000000000000000000000000000000000606082015260800190565b60208082526027908201527f696e73756666696369656e74207061796d656e74206f72207072656d69756d2060408201527f6973207a65726f00000000000000000000000000000000000000000000000000606082015260800190565b6020808252600e908201527f696e76616c696420706572696f64000000000000000000000000000000000000604082015260600190565b60208082526019908201527f496e76616c696420706f736974696f6e20636f6e747261637400000000000000604082015260600190565b6020808252601d908201527f6d617820636f766572656420616d6f756e742069732072656163686564000000604082015260600190565b6020808252601e908201527f696e76616c696420636f766572206c696d69742070657263656e746167650000604082015260600190565b6020808252600d908201527f21706f6c696379686f6c64657200000000000000000000000000000000000000604082015260600190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b918252602082015260400190565b60008219821115611a5757611a57611acd565b500190565b600082611a7757634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611a9657611a96611acd565b500290565b600082821015611aad57611aad611acd565b500390565b6000600019821415611ac657611ac6611acd565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146115c457600080fdfea26469706673582212206bfb9fce65bb44f8878c902f24cb0e91f33d565a9afd2c976bd91c3d9e5361b664736f6c63430008000033";
