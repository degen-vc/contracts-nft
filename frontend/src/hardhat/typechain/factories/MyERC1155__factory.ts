/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MyERC1155 } from "../MyERC1155";

export class MyERC1155__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MyERC1155> {
    return super.deploy(overrides || {}) as Promise<MyERC1155>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MyERC1155 {
    return super.attach(address) as MyERC1155;
  }
  connect(signer: Signer): MyERC1155__factory {
    return super.connect(signer) as MyERC1155__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyERC1155 {
    return new Contract(address, _abi, signerOrProvider) as MyERC1155;
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
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "GOLD",
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
    name: "SHIELD",
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
    name: "SILVER",
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
    name: "SWORD",
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
    name: "THORS_HAMMER",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405180606001604052806027815260200162001ef4602791396200003e6301ffc9a760e01b62000145565b6200004981620001ca565b6200005b636cdb3d1360e11b62000145565b6200006d6303a24d0760e21b62000145565b506200009a336000670de0b6b3a764000060405180602001604052806000815250620001e360201b60201c565b620000ca3360016b033b2e3c9fd0803ce800000060405180602001604052806000815250620001e360201b60201c565b620000ef336002600160405180602001604052806000815250620001e360201b60201c565b62000117336003633b9aca0060405180602001604052806000815250620001e360201b60201c565b6200013f336004633b9aca0060405180602001604052806000815250620001e360201b60201c565b6200078f565b6001600160e01b03198082161415620001a5576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b8051620001df9060039060208401906200062d565b5050565b6001600160a01b0384166200022a5760405162461bcd60e51b815260040180806020018281038252602181526020018062001f1b6021913960400191505060405180910390fd5b60006200023662000312565b90506200025d816000876200024b8862000317565b620002568862000317565b876200035d565b60008481526001602090815260408083206001600160a01b03891684528252909120546200029691859062000f0462000365821b17901c565b60008581526001602090815260408083206001600160a01b03808b16808652918452828520959095558151898152928301889052815190948616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a46200030b81600087878787620003c7565b5050505050565b335b90565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106200034c57fe5b602090810291909101015292915050565b505050505050565b600082820183811015620003c0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b620003e6846001600160a01b03166200062760201b62000f651760201c565b156200035d57836001600160a01b031663f23a6e6187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015620004785781810151838201526020016200045e565b50505050905090810190601f168015620004a65780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b158015620004ca57600080fd5b505af1925050508015620004f157506040513d6020811015620004ec57600080fd5b505160015b620005cd5762000500620006df565b806200050d575062000595565b8060405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620005595781810151838201526020016200053f565b50505050905090810190601f168015620005875780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60405162461bcd60e51b815260040180806020018281038252603481526020018062001e986034913960400191505060405180910390fd5b6001600160e01b0319811663f23a6e6160e01b146200061e5760405162461bcd60e51b815260040180806020018281038252602881526020018062001ecc6028913960400191505060405180910390fd5b50505050505050565b3b151590565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620006655760008555620006b0565b82601f106200068057805160ff1916838001178555620006b0565b82800160010185558215620006b0579182015b82811115620006b057825182559160200191906001019062000693565b50620006be929150620006c2565b5090565b5b80821115620006be5760008155600101620006c3565b60e01c90565b600060443d1015620006f15762000314565b600481823e6308c379a0620007078251620006d9565b14620007135762000314565b6040513d600319016004823e80513d6001600160401b03808311602484018310171562000744575050505062000314565b8284019250825191508082111562000760575050505062000314565b503d830160208284010111156200077a5750505062000314565b601f01601f1916810160200160405291505090565b6116f9806200079f6000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c80634e1273f41161008c578063d562e20411610066578063d562e2041461055a578063e3e55f0814610562578063e985e9c51461056a578063f242432a14610598576100ce565b80634e1273f4146103b15780635b2725ed14610524578063a22cb4651461052c576100ce565b8062fdd58e146100d357806301ffc9a7146101115780630e89341c1461014c57806313dc989f146101de5780632eb2c2d6146101e65780633e4bee38146103a9575b600080fd5b6100ff600480360360408110156100e957600080fd5b506001600160a01b038135169060200135610661565b60408051918252519081900360200190f35b6101386004803603602081101561012757600080fd5b50356001600160e01b0319166106d0565b604080519115158252519081900360200190f35b6101696004803603602081101561016257600080fd5b50356106ef565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101a357818101518382015260200161018b565b50505050905090810190601f1680156101d05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100ff610787565b6103a7600480360360a08110156101fc57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561022f57600080fd5b82018360208201111561024157600080fd5b803590602001918460208302840111600160201b8311171561026257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156102b157600080fd5b8201836020820111156102c357600080fd5b803590602001918460208302840111600160201b831117156102e457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561033357600080fd5b82018360208201111561034557600080fd5b803590602001918460018302840111600160201b8311171561036657600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061078c945050505050565b005b6100ff610a8a565b6104d4600480360360408110156103c757600080fd5b810190602081018135600160201b8111156103e157600080fd5b8201836020820111156103f357600080fd5b803590602001918460208302840111600160201b8311171561041457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561046357600080fd5b82018360208201111561047557600080fd5b803590602001918460208302840111600160201b8311171561049657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a8f945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156105105781810151838201526020016104f8565b505050509050019250505060405180910390f35b6100ff610c0d565b6103a76004803603604081101561054257600080fd5b506001600160a01b0381351690602001351515610c12565b6100ff610d01565b6100ff610d06565b6101386004803603604081101561058057600080fd5b506001600160a01b0381358116916020013516610d0b565b6103a7600480360360a08110156105ae57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156105ed57600080fd5b8201836020820111156105ff57600080fd5b803590602001918460018302840111600160201b8311171561062057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d39945050505050565b60006001600160a01b0383166106a85760405162461bcd60e51b815260040180806020018281038252602b815260200180611544602b913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561077b5780601f106107505761010080835404028352916020019161077b565b820191906000526020600020905b81548152906001019060200180831161075e57829003601f168201915b50505050509050919050565b600381565b81518351146107cc5760405162461bcd60e51b815260040180806020018281038252602881526020018061169c6028913960400191505060405180910390fd5b6001600160a01b0384166108115760405162461bcd60e51b81526004018080602001828103825260258152602001806115c96025913960400191505060405180910390fd5b610819610f6b565b6001600160a01b0316856001600160a01b0316148061084457506108448561083f610f6b565b610d0b565b61087f5760405162461bcd60e51b81526004018080602001828103825260328152602001806115ee6032913960400191505060405180910390fd5b6000610889610f6b565b9050610899818787878787610a82565b60005b845181101561099a5760008582815181106108b357fe5b6020026020010151905060008583815181106108cb57fe5b60200260200101519050610938816040518060600160405280602a8152602001611620602a91396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b0316815260200190815260200160002054610f709092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a168152205461096f9082610f04565b60009283526001602081815260408086206001600160a01b038d16875290915290932055500161089c565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610a20578181015183820152602001610a08565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610a5f578181015183820152602001610a47565b5050505090500194505050505060405180910390a4610a82818787878787611007565b505050505050565b600081565b60608151835114610ad15760405162461bcd60e51b81526004018080602001828103825260298152602001806116736029913960400191505060405180910390fd5b6000835167ffffffffffffffff81118015610aeb57600080fd5b50604051908082528060200260200182016040528015610b15578160200160208202803683370190505b50905060005b8451811015610c055760006001600160a01b0316858281518110610b3b57fe5b60200260200101516001600160a01b03161415610b895760405162461bcd60e51b815260040180806020018281038252603181526020018061156f6031913960400191505060405180910390fd5b60016000858381518110610b9957fe5b602002602001015181526020019081526020016000206000868381518110610bbd57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610bf257fe5b6020908102919091010152600101610b1b565b509392505050565b600481565b816001600160a01b0316610c24610f6b565b6001600160a01b03161415610c6a5760405162461bcd60e51b815260040180806020018281038252602981526020018061164a6029913960400191505060405180910390fd5b8060026000610c77610f6b565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610cbb610f6b565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b600281565b600181565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b038416610d7e5760405162461bcd60e51b81526004018080602001828103825260258152602001806115c96025913960400191505060405180910390fd5b610d86610f6b565b6001600160a01b0316856001600160a01b03161480610dac5750610dac8561083f610f6b565b610de75760405162461bcd60e51b81526004018080602001828103825260298152602001806115a06029913960400191505060405180910390fd5b6000610df1610f6b565b9050610e11818787610e0288611286565b610e0b88611286565b87610a82565b610e58836040518060600160405280602a8152602001611620602a913960008781526001602090815260408083206001600160a01b038d1684529091529020549190610f70565b60008581526001602090815260408083206001600160a01b038b81168552925280832093909355871681522054610e8f9084610f04565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a4610a828187878787876112cb565b600082820183811015610f5e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3b151590565b335b90565b60008184841115610fff5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610fc4578181015183820152602001610fac565b50505050905090810190601f168015610ff15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b611019846001600160a01b0316610f65565b15610a8257836001600160a01b031663bc197c8187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156110a757818101518382015260200161108f565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156110e65781810151838201526020016110ce565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561112257818101518382015260200161110a565b50505050905090810190601f16801561114f5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b15801561117457600080fd5b505af192505050801561119957506040513d602081101561119457600080fd5b505160015b61122e576111a5611442565b806111b057506111f7565b60405162461bcd60e51b8152602060048201818152835160248401528351849391928392604401919085019080838360008315610fc4578181015183820152602001610fac565b60405162461bcd60e51b81526004018080602001828103825260348152602001806114e86034913960400191505060405180910390fd5b6001600160e01b0319811663bc197c8160e01b1461127d5760405162461bcd60e51b815260040180806020018281038252602881526020018061151c6028913960400191505060405180910390fd5b50505050505050565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106112ba57fe5b602090810291909101015292915050565b6112dd846001600160a01b0316610f65565b15610a8257836001600160a01b031663f23a6e6187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561136c578181015183820152602001611354565b50505050905090810190601f1680156113995780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b1580156113bc57600080fd5b505af19250505080156113e157506040513d60208110156113dc57600080fd5b505160015b6113ed576111a5611442565b6001600160e01b0319811663f23a6e6160e01b1461127d5760405162461bcd60e51b815260040180806020018281038252602881526020018061151c6028913960400191505060405180910390fd5b60e01c90565b600060443d101561145257610f6d565b600481823e6308c379a0611466825161143c565b1461147057610f6d565b6040513d600319016004823e80513d67ffffffffffffffff81602484011181841117156114a05750505050610f6d565b828401925082519150808211156114ba5750505050610f6d565b503d830160208284010111156114d257505050610f6d565b601f01601f191681016020016040529150509056fe455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e73666572455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368a26469706673582212204d9a7e343f81aa4688b2f38977f081603553f698d800ca7518910eb4fb1df3f164736f6c63430007060033455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e7368747470733a2f2f67616d652e6578616d706c652f6170692f6974656d2f7b69647d2e6a736f6e455243313135353a206d696e7420746f20746865207a65726f2061646472657373";