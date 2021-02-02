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
    name: "award",
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
  "0x60806040523480156200001157600080fd5b5060408051808201909152601e81527f68747470733a2f2f67616d652e6578616d706c652f6170692f6974656d2f00006020820152620000586301ffc9a760e01b6200008e565b620000638162000113565b62000075636cdb3d1360e11b6200008e565b620000876303a24d0760e21b6200008e565b50620001d8565b6001600160e01b03198082161415620000ee576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b8051620001289060039060208401906200012c565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620001645760008555620001af565b82601f106200017f57805160ff1916838001178555620001af565b82800160010185558215620001af579182015b82811115620001af57825182559160200191906001019062000192565b50620001bd929150620001c1565b5090565b5b80821115620001bd5760008155600101620001c2565b6117dd80620001e86000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c806341a494c51161006657806341a494c5146103655780634e1273f41461036d578063a22cb465146104e0578063e985e9c51461050e578063f242432a1461053c57610092565b8062fdd58e1461009757806301ffc9a7146100d55780630e89341c146101105780632eb2c2d6146101a2575b600080fd5b6100c3600480360360408110156100ad57600080fd5b506001600160a01b038135169060200135610605565b60408051918252519081900360200190f35b6100fc600480360360208110156100eb57600080fd5b50356001600160e01b031916610674565b604080519115158252519081900360200190f35b61012d6004803603602081101561012657600080fd5b5035610693565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016757818101518382015260200161014f565b50505050905090810190601f1680156101945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610363600480360360a08110156101b857600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156101eb57600080fd5b8201836020820111156101fd57600080fd5b803590602001918460208302840111600160201b8311171561021e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561026d57600080fd5b82018360208201111561027f57600080fd5b803590602001918460208302840111600160201b831117156102a057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156102ef57600080fd5b82018360208201111561030157600080fd5b803590602001918460018302840111600160201b8311171561032257600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061072b945050505050565b005b6100c3610a29565b6104906004803603604081101561038357600080fd5b810190602081018135600160201b81111561039d57600080fd5b8201836020820111156103af57600080fd5b803590602001918460208302840111600160201b831117156103d057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561041f57600080fd5b82018360208201111561043157600080fd5b803590602001918460208302840111600160201b8311171561045257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a5a945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156104cc5781810151838201526020016104b4565b505050509050019250505060405180910390f35b610363600480360360408110156104f657600080fd5b506001600160a01b0381351690602001351515610bd8565b6100fc6004803603604081101561052457600080fd5b506001600160a01b0381358116916020013516610cc7565b610363600480360360a081101561055257600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561059157600080fd5b8201836020820111156105a357600080fd5b803590602001918460018302840111600160201b831117156105c457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610cf5945050505050565b60006001600160a01b03831661064c5760405162461bcd60e51b815260040180806020018281038252602b815260200180611607602b913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561071f5780601f106106f45761010080835404028352916020019161071f565b820191906000526020600020905b81548152906001019060200180831161070257829003601f168201915b50505050509050919050565b815183511461076b5760405162461bcd60e51b815260040180806020018281038252602881526020018061175f6028913960400191505060405180910390fd5b6001600160a01b0384166107b05760405162461bcd60e51b815260040180806020018281038252602581526020018061168c6025913960400191505060405180910390fd5b6107b8610ec0565b6001600160a01b0316856001600160a01b031614806107e357506107e3856107de610ec0565b610cc7565b61081e5760405162461bcd60e51b81526004018080602001828103825260328152602001806116b16032913960400191505060405180910390fd5b6000610828610ec0565b9050610838818787878787610a21565b60005b845181101561093957600085828151811061085257fe5b60200260200101519050600085838151811061086a57fe5b602002602001015190506108d7816040518060600160405280602a81526020016116e3602a91396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b0316815260200190815260200160002054610ec49092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a168152205461090e9082610f5b565b60009283526001602081815260408086206001600160a01b038d16875290915290932055500161083b565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156109bf5781810151838201526020016109a7565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156109fe5781810151838201526020016109e6565b5050505090500194505050505060405180910390a4610a21818787878787610fbc565b505050505050565b600480546001908101918290556040805160208101909152600080825292610a5292339261123b565b506004545b90565b60608151835114610a9c5760405162461bcd60e51b81526004018080602001828103825260298152602001806117366029913960400191505060405180910390fd5b6000835167ffffffffffffffff81118015610ab657600080fd5b50604051908082528060200260200182016040528015610ae0578160200160208202803683370190505b50905060005b8451811015610bd05760006001600160a01b0316858281518110610b0657fe5b60200260200101516001600160a01b03161415610b545760405162461bcd60e51b81526004018080602001828103825260318152602001806116326031913960400191505060405180910390fd5b60016000858381518110610b6457fe5b602002602001015181526020019081526020016000206000868381518110610b8857fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610bbd57fe5b6020908102919091010152600101610ae6565b509392505050565b816001600160a01b0316610bea610ec0565b6001600160a01b03161415610c305760405162461bcd60e51b815260040180806020018281038252602981526020018061170d6029913960400191505060405180910390fd5b8060026000610c3d610ec0565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610c81610ec0565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b038416610d3a5760405162461bcd60e51b815260040180806020018281038252602581526020018061168c6025913960400191505060405180910390fd5b610d42610ec0565b6001600160a01b0316856001600160a01b03161480610d685750610d68856107de610ec0565b610da35760405162461bcd60e51b81526004018080602001828103825260298152602001806116636029913960400191505060405180910390fd5b6000610dad610ec0565b9050610dcd818787610dbe88611343565b610dc788611343565b87610a21565b610e14836040518060600160405280602a81526020016116e3602a913960008781526001602090815260408083206001600160a01b038d1684529091529020549190610ec4565b60008581526001602090815260408083206001600160a01b038b81168552925280832093909355871681522054610e4b9084610f5b565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a4610a21818787878787611388565b3390565b60008184841115610f535760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f18578181015183820152602001610f00565b50505050905090810190601f168015610f455780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610fb5576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b610fce846001600160a01b03166114f9565b15610a2157836001600160a01b031663bc197c8187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561105c578181015183820152602001611044565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561109b578181015183820152602001611083565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156110d75781810151838201526020016110bf565b50505050905090810190601f1680156111045780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b15801561112957600080fd5b505af192505050801561114e57506040513d602081101561114957600080fd5b505160015b6111e35761115a611505565b8061116557506111ac565b60405162461bcd60e51b8152602060048201818152835160248401528351849391928392604401919085019080838360008315610f18578181015183820152602001610f00565b60405162461bcd60e51b81526004018080602001828103825260348152602001806115ab6034913960400191505060405180910390fd5b6001600160e01b0319811663bc197c8160e01b146112325760405162461bcd60e51b81526004018080602001828103825260288152602001806115df6028913960400191505060405180910390fd5b50505050505050565b6001600160a01b0384166112805760405162461bcd60e51b81526004018080602001828103825260218152602001806117876021913960400191505060405180910390fd5b600061128a610ec0565b905061129c81600087610dbe88611343565b60008481526001602090815260408083206001600160a01b03891684529091529020546112c99084610f5b565b60008581526001602090815260408083206001600160a01b03808b16808652918452828520959095558151898152928301889052815190948616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a461133c81600087878787611388565b5050505050565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061137757fe5b602090810291909101015292915050565b61139a846001600160a01b03166114f9565b15610a2157836001600160a01b031663f23a6e6187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611429578181015183820152602001611411565b50505050905090810190601f1680156114565780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561147957600080fd5b505af192505050801561149e57506040513d602081101561149957600080fd5b505160015b6114aa5761115a611505565b6001600160e01b0319811663f23a6e6160e01b146112325760405162461bcd60e51b81526004018080602001828103825260288152602001806115df6028913960400191505060405180910390fd5b3b151590565b60e01c90565b600060443d101561151557610a57565b600481823e6308c379a061152982516114ff565b1461153357610a57565b6040513d600319016004823e80513d67ffffffffffffffff81602484011181841117156115635750505050610a57565b8284019250825191508082111561157d5750505050610a57565b503d8301602082840101111561159557505050610a57565b601f01601f191681016020016040529150509056fe455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e73666572455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368455243313135353a206d696e7420746f20746865207a65726f2061646472657373a2646970667358221220a3285c7108b3ff50b2c04c3dc586d12e75c51b60667faab1504264a7149915ab64736f6c63430007060033";
