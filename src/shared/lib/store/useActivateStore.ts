import { useEffect, useRef } from 'react'

import { RootStore } from "../../store/RootStore.ts"
import { useStores } from "../../store/StoreProvider.tsx"
import { ActivateDeactivate } from "./activate.ts"
import { PickOfValue } from "./pickOfValues.ts"

type AllowedStores = PickOfValue<RootStore, ActivateDeactivate>

/**
 * IMPORTANT!
 * Objects is forbidden as args because on every render its new and triggers useEffect
 * @param name ContractStore name
 * @param args for activate
 */

export const useActivatedStore = <StoreName extends keyof AllowedStores, Store extends AllowedStores[StoreName]>(
  name: StoreName,
  ...args: Store extends { activate: (...args: infer Args) => void } ? Args : never
) => {
  const activated = useRef<boolean>(false)
  const stores = useStores()

  useEffect(() => {
    const store = stores[name]
    // @ts-ignore
    if (!args.every((arg) => arg !== undefined) || store.isActivated) return
    activated.current = true
    // ts говорит, что args не имеют тип tuple, но args выведены как аргументы функции и не могут быть не tuple
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    store.activate(...args)

    return () => {
      if (!activated.current) return

      activated.current = false
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      store.deactivate()
    }
  }, args) // other deps are not changing, but they cause unnecessary runs

  return { [name]: stores[name] } as Pick<RootStore, StoreName>
}
