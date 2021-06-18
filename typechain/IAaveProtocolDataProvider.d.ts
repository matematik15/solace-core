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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IAaveProtocolDataProviderInterface extends ethers.utils.Interface {
  functions: {
    "getReserveTokensAddresses(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getReserveTokensAddresses",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getReserveTokensAddresses",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAaveProtocolDataProvider extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IAaveProtocolDataProviderInterface;

  functions: {
    getReserveTokensAddresses(
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      0: string;
      1: string;
      2: string;
    }>;

    "getReserveTokensAddresses(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      0: string;
      1: string;
      2: string;
    }>;
  };

  getReserveTokensAddresses(
    asset: string,
    overrides?: CallOverrides
  ): Promise<{
    aTokenAddress: string;
    stableDebtTokenAddress: string;
    variableDebtTokenAddress: string;
    0: string;
    1: string;
    2: string;
  }>;

  "getReserveTokensAddresses(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<{
    aTokenAddress: string;
    stableDebtTokenAddress: string;
    variableDebtTokenAddress: string;
    0: string;
    1: string;
    2: string;
  }>;

  callStatic: {
    getReserveTokensAddresses(
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      0: string;
      1: string;
      2: string;
    }>;

    "getReserveTokensAddresses(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      0: string;
      1: string;
      2: string;
    }>;
  };

  filters: {};

  estimateGas: {
    getReserveTokensAddresses(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveTokensAddresses(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getReserveTokensAddresses(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveTokensAddresses(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
