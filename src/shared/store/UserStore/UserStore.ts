import { Address } from "@ton/core"
import { makeAutoObservable } from 'mobx'

import { getClient } from "../../config/ton/tonConfig.ts"
import { ActivateDeactivate } from "../../lib/store/activate.ts"

export class UserStore implements ActivateDeactivate {
  balance: bigint = 0n
  isActivated: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  async activate(address: string): Promise<void> {
    if (address === '' || !Address.isFriendly(address)) return

    const client = await getClient()
    this.balance = await client.getBalance(Address.parse(address))
  }

  reset() {
    this.balance = 0n
    this.isActivated = false
  }

  deactivate(): void {
    this.reset()
  }

}
