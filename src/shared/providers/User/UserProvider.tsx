import { observer } from "mobx-react-lite"
import { FC, PropsWithChildren } from "react"

import { useActivatedStore } from "../../lib/store/useActivateStore.ts"
import {useInitData} from "@tma.js/sdk-react";

export const UserProvider: FC<PropsWithChildren> = observer(({ children } ) => {

  const initData = useInitData()
  useActivatedStore('userStore', initData)

  return children
})