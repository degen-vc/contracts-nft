/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface FaucetInterface extends ethers.utils.Interface {
  functions: {
    "requestToken(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "requestToken",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "requestToken",
    data: BytesLike
  ): Result;

  events: {};
}

export class Faucet extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FaucetInterface;

  functions: {
    requestToken(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "requestToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  requestToken(
    _token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "requestToken(address)"(
    _token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    requestToken(_token: string, overrides?: CallOverrides): Promise<void>;

    "requestToken(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    requestToken(_token: string, overrides?: Overrides): Promise<BigNumber>;

    "requestToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    requestToken(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "requestToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
