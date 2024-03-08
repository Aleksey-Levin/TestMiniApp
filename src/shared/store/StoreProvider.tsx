'use client'
import { observer } from "mobx-react-lite"
import { createContext, FC, PropsWithChildren, useContext } from "react"

import { RootStore } from "./RootStore.ts"

let store: RootStore

function initializeStore() {
  const _store = store ?? new RootStore()
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store
  // Create the store once in the (client)
  if (!store) store = _store

  return _store
}

export const StoreContext = createContext<RootStore>(initializeStore())

export function useStores() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error("useStore must be used within StoreProvider")
  }

  return context
}

export const StoreProvider: FC<PropsWithChildren> = observer(({ children }) =>{
  const store = initializeStore()

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
})