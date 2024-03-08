import { useTonAddress } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { FC, PropsWithChildren } from "react"

import { useActivatedStore } from "../../lib/store/useActivateStore.ts"

export const UserProvider: FC<PropsWithChildren> = observer(({ children } ) => {

  const walletAddress = useTonAddress()
  useActivatedStore('userStore', walletAddress)

  return children
})