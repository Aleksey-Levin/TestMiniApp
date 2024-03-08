import { Address, Transaction } from "@ton/core"

import { getClient } from "../../config/ton/tonConfig.ts"
import {contractRowAddress} from "../../config/contracts/master.ts";

export async function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

async function waitCreditTx(address: Address, lastTx: Transaction, bet: bigint) {
  const client = await getClient()
  let maxTries = 12
  while (maxTries > 0) {
    maxTries--
    const transactions = await client.getTransactions(address, { limit: 10 })
    if (lastTx.lt !== transactions[0].lt
        && transactions[0]
        // @ts-ignore
        && transactions[0].description.creditPhase
        // @ts-ignore
        && transactions[0].inMessage?.info.src?.toRawString() === contractRowAddress
        // @ts-ignore
        && (transactions[0].inMessage?.info.value?.coins as bigint) > bet
    ) {
      return true
    }
    await sleep(3000)
  }
  
  return false
}

export async function waitTx(address: Address, bet: bigint) {
  const client = await getClient()
  let maxTries = 25
  let lastTx: Transaction | undefined
  while (maxTries > 0) {
    maxTries--
    const transactions = await client.getTransactions(address, { limit: 10 })
    console.log(transactions[0])
    if (lastTx && lastTx.lt !== transactions[0].lt){
      await sleep(5000)

      return await waitCreditTx(address, transactions[0], bet)
    }
    await sleep(3000)
    lastTx = transactions[0]
  }
  throw new Error("Timeout")
}
