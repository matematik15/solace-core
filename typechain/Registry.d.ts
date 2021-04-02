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

interface RegistryInterface extends ethers.utils.Interface {
  functions: {
    "addProduct(address)": FunctionFragment;
    "getProduct(uint256)": FunctionFragment;
    "governance()": FunctionFragment;
    "isProduct(address)": FunctionFragment;
    "locker()": FunctionFragment;
    "master()": FunctionFragment;
    "numProducts()": FunctionFragment;
    "removeProduct(address)": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "setLocker(address)": FunctionFragment;
    "setMaster(address)": FunctionFragment;
    "setSolace(address)": FunctionFragment;
    "setTreasury(address)": FunctionFragment;
    "setVault(address)": FunctionFragment;
    "solace()": FunctionFragment;
    "treasury()": FunctionFragment;
    "vault()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addProduct", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getProduct",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isProduct", values: [string]): string;
  encodeFunctionData(functionFragment: "locker", values?: undefined): string;
  encodeFunctionData(functionFragment: "master", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "numProducts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeProduct",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setLocker", values: [string]): string;
  encodeFunctionData(functionFragment: "setMaster", values: [string]): string;
  encodeFunctionData(functionFragment: "setSolace", values: [string]): string;
  encodeFunctionData(functionFragment: "setTreasury", values: [string]): string;
  encodeFunctionData(functionFragment: "setVault", values: [string]): string;
  encodeFunctionData(functionFragment: "solace", values?: undefined): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getProduct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isProduct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "locker", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "master", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLocker", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMaster", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSolace", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "solace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;

  events: {
    "GovernanceSet(address)": EventFragment;
    "LockerSet(address)": EventFragment;
    "MasterSet(address)": EventFragment;
    "ProductAdded(address)": EventFragment;
    "ProductRemoved(address)": EventFragment;
    "SolaceSet(address)": EventFragment;
    "TreasurySet(address)": EventFragment;
    "VaultSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GovernanceSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LockerSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MasterSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProductAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProductRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SolaceSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreasurySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultSet"): EventFragment;
}

export class Registry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RegistryInterface;

  functions: {
    addProduct(
      _product: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addProduct(address)"(
      _product: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getProduct(
      _productNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getProduct(uint256)"(
      _productNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    governance(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "governance()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    isProduct(
      _product: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isProduct(address)"(
      _product: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    locker(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "locker()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    master(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "master()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    numProducts(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "numProducts()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    removeProduct(
      _product: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeProduct(address)"(
      _product: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setLocker(
      _locker: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLocker(address)"(
      _locker: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMaster(
      _master: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMaster(address)"(
      _master: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setSolace(
      _solace: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSolace(address)"(
      _solace: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTreasury(address)"(
      _treasury: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setVault(
      _vault: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setVault(address)"(
      _vault: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    solace(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "solace()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    treasury(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "treasury()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    vault(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "vault()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  addProduct(
    _product: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addProduct(address)"(
    _product: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getProduct(
    _productNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getProduct(uint256)"(
    _productNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  isProduct(_product: string, overrides?: CallOverrides): Promise<boolean>;

  "isProduct(address)"(
    _product: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  locker(overrides?: CallOverrides): Promise<string>;

  "locker()"(overrides?: CallOverrides): Promise<string>;

  master(overrides?: CallOverrides): Promise<string>;

  "master()"(overrides?: CallOverrides): Promise<string>;

  numProducts(overrides?: CallOverrides): Promise<BigNumber>;

  "numProducts()"(overrides?: CallOverrides): Promise<BigNumber>;

  removeProduct(
    _product: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeProduct(address)"(
    _product: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setGovernance(
    _governance: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGovernance(address)"(
    _governance: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setLocker(
    _locker: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLocker(address)"(
    _locker: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMaster(
    _master: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMaster(address)"(
    _master: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setSolace(
    _solace: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setSolace(address)"(
    _solace: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setTreasury(
    _treasury: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTreasury(address)"(
    _treasury: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setVault(_vault: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setVault(address)"(
    _vault: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  solace(overrides?: CallOverrides): Promise<string>;

  "solace()"(overrides?: CallOverrides): Promise<string>;

  treasury(overrides?: CallOverrides): Promise<string>;

  "treasury()"(overrides?: CallOverrides): Promise<string>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addProduct(_product: string, overrides?: CallOverrides): Promise<void>;

    "addProduct(address)"(
      _product: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getProduct(
      _productNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getProduct(uint256)"(
      _productNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    isProduct(_product: string, overrides?: CallOverrides): Promise<boolean>;

    "isProduct(address)"(
      _product: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    locker(overrides?: CallOverrides): Promise<string>;

    "locker()"(overrides?: CallOverrides): Promise<string>;

    master(overrides?: CallOverrides): Promise<string>;

    "master()"(overrides?: CallOverrides): Promise<string>;

    numProducts(overrides?: CallOverrides): Promise<BigNumber>;

    "numProducts()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeProduct(_product: string, overrides?: CallOverrides): Promise<void>;

    "removeProduct(address)"(
      _product: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setGovernance(
      _governance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setLocker(_locker: string, overrides?: CallOverrides): Promise<void>;

    "setLocker(address)"(
      _locker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaster(_master: string, overrides?: CallOverrides): Promise<void>;

    "setMaster(address)"(
      _master: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSolace(_solace: string, overrides?: CallOverrides): Promise<void>;

    "setSolace(address)"(
      _solace: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasury(_treasury: string, overrides?: CallOverrides): Promise<void>;

    "setTreasury(address)"(
      _treasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVault(_vault: string, overrides?: CallOverrides): Promise<void>;

    "setVault(address)"(
      _vault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    solace(overrides?: CallOverrides): Promise<string>;

    "solace()"(overrides?: CallOverrides): Promise<string>;

    treasury(overrides?: CallOverrides): Promise<string>;

    "treasury()"(overrides?: CallOverrides): Promise<string>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    GovernanceSet(_governance: null): EventFilter;

    LockerSet(_locker: null): EventFilter;

    MasterSet(_master: null): EventFilter;

    ProductAdded(_product: null): EventFilter;

    ProductRemoved(_product: null): EventFilter;

    SolaceSet(_solace: null): EventFilter;

    TreasurySet(_treasury: null): EventFilter;

    VaultSet(_vault: null): EventFilter;
  };

  estimateGas: {
    addProduct(_product: string, overrides?: Overrides): Promise<BigNumber>;

    "addProduct(address)"(
      _product: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getProduct(
      _productNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProduct(uint256)"(
      _productNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    isProduct(_product: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isProduct(address)"(
      _product: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    locker(overrides?: CallOverrides): Promise<BigNumber>;

    "locker()"(overrides?: CallOverrides): Promise<BigNumber>;

    master(overrides?: CallOverrides): Promise<BigNumber>;

    "master()"(overrides?: CallOverrides): Promise<BigNumber>;

    numProducts(overrides?: CallOverrides): Promise<BigNumber>;

    "numProducts()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeProduct(_product: string, overrides?: Overrides): Promise<BigNumber>;

    "removeProduct(address)"(
      _product: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setGovernance(
      _governance: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setLocker(_locker: string, overrides?: Overrides): Promise<BigNumber>;

    "setLocker(address)"(
      _locker: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMaster(_master: string, overrides?: Overrides): Promise<BigNumber>;

    "setMaster(address)"(
      _master: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setSolace(_solace: string, overrides?: Overrides): Promise<BigNumber>;

    "setSolace(address)"(
      _solace: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setTreasury(_treasury: string, overrides?: Overrides): Promise<BigNumber>;

    "setTreasury(address)"(
      _treasury: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setVault(_vault: string, overrides?: Overrides): Promise<BigNumber>;

    "setVault(address)"(
      _vault: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    solace(overrides?: CallOverrides): Promise<BigNumber>;

    "solace()"(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    "treasury()"(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addProduct(
      _product: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addProduct(address)"(
      _product: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getProduct(
      _productNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProduct(uint256)"(
      _productNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isProduct(
      _product: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isProduct(address)"(
      _product: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    locker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "locker()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    master(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "master()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numProducts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "numProducts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeProduct(
      _product: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeProduct(address)"(
      _product: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setLocker(
      _locker: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLocker(address)"(
      _locker: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMaster(
      _master: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMaster(address)"(
      _master: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setSolace(
      _solace: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSolace(address)"(
      _solace: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTreasury(address)"(
      _treasury: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setVault(
      _vault: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setVault(address)"(
      _vault: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    solace(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "solace()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "treasury()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
