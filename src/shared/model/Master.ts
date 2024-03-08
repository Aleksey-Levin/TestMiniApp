import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from '@ton/core'

export interface MasterConfig {
  admin: Address;
  helper: Address;
}

export function masterConfigToCell(config: MasterConfig): Cell {
  return beginCell().storeAddress(config.admin).storeAddress(config.helper).endCell()
}

export class Master implements Contract {
  constructor(
    readonly address: Address,
    readonly init?: { code: Cell; data: Cell },
  ) {}

  static createFromAddress(address: Address) {
    return new Master(address)
  }

  static createFromConfig(config: MasterConfig, code: Cell, workchain = 0) {
    const data = masterConfigToCell(config)
    const init = { code, data }
    
    return new Master(contractAddress(workchain, init), init)
  }

  async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
    await provider.internal(via, {
      value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: beginCell().endCell(),
      bounce: true,
    })
  }

  async sendDeposit(
    provider: ContractProvider,
    via: Sender,
    value: bigint,
    opts: {
      queryId: bigint;
    },
  ) {
    await provider.internal(via, {
      value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: beginCell().storeUint(0, 1).storeUint(opts.queryId, 64).endCell(),
    })
  }

  async sendWithdraw(
    provider: ContractProvider,
    via: Sender,
    value: bigint,
    opts: {
      queryId: bigint;
      amount: bigint;
    },
  ) {
    await provider.internal(via, {
      value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: beginCell().storeUint(0x1540f092, 32).storeUint(opts.queryId, 64).storeCoins(opts.amount).endCell(),
    })
  }

  async sendBet(
    provider: ContractProvider,
    via: Sender,
    value: bigint,
    opts: {
      queryId: bigint;
    },
  ) {
    await provider.internal(via, {
      value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: beginCell().storeUint(0x2c2e7838, 32).storeUint(opts.queryId, 64).endCell(),
    })
  }
}