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

interface Erc721FarmInterface extends ethers.utils.Interface {
  functions: {
    "accRewardPerShare()": FunctionFragment;
    "appraise(uint256)": FunctionFragment;
    "assertDeposited(address,uint256)": FunctionFragment;
    "blockReward()": FunctionFragment;
    "countDeposited(address)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "endBlock()": FunctionFragment;
    "farmType()": FunctionFragment;
    "getDeposited(address,uint256)": FunctionFragment;
    "getMultiplier(uint256,uint256)": FunctionFragment;
    "governance()": FunctionFragment;
    "lastRewardBlock()": FunctionFragment;
    "listDeposited(address)": FunctionFragment;
    "master()": FunctionFragment;
    "pendingRewards(address)": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setEnd(uint256)": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "setRewards(uint256)": FunctionFragment;
    "stakeToken()": FunctionFragment;
    "startBlock()": FunctionFragment;
    "updateFarm()": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "valueStaked()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawRewards()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accRewardPerShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "appraise",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "assertDeposited",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "blockReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "countDeposited",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "endBlock", values?: undefined): string;
  encodeFunctionData(functionFragment: "farmType", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDeposited",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMultiplier",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastRewardBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listDeposited",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "master", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setEnd",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateFarm",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "valueStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRewards",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accRewardPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "appraise", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assertDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blockReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "countDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "farmType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastRewardBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "master", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setEnd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateFarm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "valueStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRewards",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export class Erc721Farm extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Erc721FarmInterface;

  functions: {
    accRewardPerShare(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "accRewardPerShare()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    appraise(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "appraise(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    assertDeposited(
      _user: string,
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "assertDeposited(address,uint256)"(
      _user: string,
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    blockReward(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "blockReward()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    countDeposited(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "countDeposited(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    deposit(
      _token: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deposit(uint256)"(
      _token: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    endBlock(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "endBlock()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    farmType(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "farmType()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getDeposited(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getDeposited(address,uint256)"(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getMultiplier(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
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

    lastRewardBlock(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lastRewardBlock()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    listDeposited(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
      1: BigNumber[];
    }>;

    "listDeposited(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
      1: BigNumber[];
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

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "pendingRewards(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    rewardToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "rewardToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setEnd(
      _endBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setEnd(uint256)"(
      _endBlock: BigNumberish,
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

    setRewards(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRewards(uint256)"(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stakeToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "stakeToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    startBlock(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "startBlock()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    updateFarm(overrides?: Overrides): Promise<ContractTransaction>;

    "updateFarm()"(overrides?: Overrides): Promise<ContractTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      value: BigNumber;
      rewardDebt: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      value: BigNumber;
      rewardDebt: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    valueStaked(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "valueStaked()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    withdraw(
      _token: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      _token: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawRewards(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawRewards()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

  "accRewardPerShare()"(overrides?: CallOverrides): Promise<BigNumber>;

  appraise(_token: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "appraise(uint256)"(
    _token: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  assertDeposited(
    _user: string,
    _token: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "assertDeposited(address,uint256)"(
    _user: string,
    _token: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  blockReward(overrides?: CallOverrides): Promise<BigNumber>;

  "blockReward()"(overrides?: CallOverrides): Promise<BigNumber>;

  countDeposited(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "countDeposited(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    _token: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deposit(uint256)"(
    _token: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  endBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "endBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  farmType(overrides?: CallOverrides): Promise<BigNumber>;

  "farmType()"(overrides?: CallOverrides): Promise<BigNumber>;

  getDeposited(
    _user: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "getDeposited(address,uint256)"(
    _user: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  getMultiplier(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getMultiplier(uint256,uint256)"(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "lastRewardBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  listDeposited(
    _user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber[];
    1: BigNumber[];
  }>;

  "listDeposited(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber[];
    1: BigNumber[];
  }>;

  master(overrides?: CallOverrides): Promise<string>;

  "master()"(overrides?: CallOverrides): Promise<string>;

  pendingRewards(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "pendingRewards(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  "rewardToken()"(overrides?: CallOverrides): Promise<string>;

  setEnd(
    _endBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setEnd(uint256)"(
    _endBlock: BigNumberish,
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

  setRewards(
    _blockReward: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRewards(uint256)"(
    _blockReward: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stakeToken(overrides?: CallOverrides): Promise<string>;

  "stakeToken()"(overrides?: CallOverrides): Promise<string>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "startBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  updateFarm(overrides?: Overrides): Promise<ContractTransaction>;

  "updateFarm()"(overrides?: Overrides): Promise<ContractTransaction>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    value: BigNumber;
    rewardDebt: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "userInfo(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    value: BigNumber;
    rewardDebt: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  valueStaked(overrides?: CallOverrides): Promise<BigNumber>;

  "valueStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    _token: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    _token: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawRewards(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawRewards()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    "accRewardPerShare()"(overrides?: CallOverrides): Promise<BigNumber>;

    appraise(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "appraise(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assertDeposited(
      _user: string,
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "assertDeposited(address,uint256)"(
      _user: string,
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    blockReward(overrides?: CallOverrides): Promise<BigNumber>;

    "blockReward()"(overrides?: CallOverrides): Promise<BigNumber>;

    countDeposited(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "countDeposited(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(_token: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "deposit(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "endBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    farmType(overrides?: CallOverrides): Promise<BigNumber>;

    "farmType()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDeposited(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getDeposited(address,uint256)"(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMultiplier(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "lastRewardBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    listDeposited(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
      1: BigNumber[];
    }>;

    "listDeposited(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
      1: BigNumber[];
    }>;

    master(overrides?: CallOverrides): Promise<string>;

    "master()"(overrides?: CallOverrides): Promise<string>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRewards(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    "rewardToken()"(overrides?: CallOverrides): Promise<string>;

    setEnd(_endBlock: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setEnd(uint256)"(
      _endBlock: BigNumberish,
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

    setRewards(
      _blockReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRewards(uint256)"(
      _blockReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeToken(overrides?: CallOverrides): Promise<string>;

    "stakeToken()"(overrides?: CallOverrides): Promise<string>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "startBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateFarm(overrides?: CallOverrides): Promise<void>;

    "updateFarm()"(overrides?: CallOverrides): Promise<void>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      value: BigNumber;
      rewardDebt: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      value: BigNumber;
      rewardDebt: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    valueStaked(overrides?: CallOverrides): Promise<BigNumber>;

    "valueStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(_token: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "withdraw(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawRewards(overrides?: CallOverrides): Promise<void>;

    "withdrawRewards()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Deposit(_user: string | null, _token: null): EventFilter;

    Withdraw(_user: string | null, _token: null): EventFilter;
  };

  estimateGas: {
    accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    "accRewardPerShare()"(overrides?: CallOverrides): Promise<BigNumber>;

    appraise(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "appraise(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assertDeposited(
      _user: string,
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "assertDeposited(address,uint256)"(
      _user: string,
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blockReward(overrides?: CallOverrides): Promise<BigNumber>;

    "blockReward()"(overrides?: CallOverrides): Promise<BigNumber>;

    countDeposited(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "countDeposited(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(_token: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "deposit(uint256)"(
      _token: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "endBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    farmType(overrides?: CallOverrides): Promise<BigNumber>;

    "farmType()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDeposited(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDeposited(address,uint256)"(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMultiplier(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "lastRewardBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    listDeposited(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "listDeposited(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    master(overrides?: CallOverrides): Promise<BigNumber>;

    "master()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRewards(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    setEnd(_endBlock: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setEnd(uint256)"(
      _endBlock: BigNumberish,
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

    setRewards(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRewards(uint256)"(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    "stakeToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "startBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateFarm(overrides?: Overrides): Promise<BigNumber>;

    "updateFarm()"(overrides?: Overrides): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    valueStaked(overrides?: CallOverrides): Promise<BigNumber>;

    "valueStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(_token: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(uint256)"(
      _token: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawRewards(overrides?: Overrides): Promise<BigNumber>;

    "withdrawRewards()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accRewardPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "accRewardPerShare()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    appraise(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "appraise(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assertDeposited(
      _user: string,
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "assertDeposited(address,uint256)"(
      _user: string,
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blockReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "blockReward()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    countDeposited(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "countDeposited(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _token: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deposit(uint256)"(
      _token: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    endBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "endBlock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    farmType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "farmType()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeposited(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDeposited(address,uint256)"(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMultiplier(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastRewardBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastRewardBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listDeposited(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "listDeposited(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    master(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "master()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingRewards(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setEnd(
      _endBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setEnd(uint256)"(
      _endBlock: BigNumberish,
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

    setRewards(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRewards(uint256)"(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stakeToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startBlock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateFarm(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updateFarm()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    valueStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "valueStaked()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _token: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      _token: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawRewards(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawRewards()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
