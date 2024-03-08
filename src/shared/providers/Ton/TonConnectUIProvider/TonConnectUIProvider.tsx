import { TonConnectUIProvider } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { FC, PropsWithChildren } from "react"

export const TonConnectUiProvider: FC<PropsWithChildren> = observer(({ children }) => {
  return (
    <TonConnectUIProvider manifestUrl="https://api.npoint.io/f0eda63c509ff2edd11a">
      { children }
    </TonConnectUIProvider>
  )
})