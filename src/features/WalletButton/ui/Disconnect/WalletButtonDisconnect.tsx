import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { FC, useCallback } from "react"

import { useStores } from "../../../../shared/store/StoreProvider.tsx"
import { Txt } from "../../../../shared/ui/display/Txt/Txt.tsx"
import classes from './WalletButtonDisconnect.module.scss'

interface WalletButtonDisconnectProps {
  onDisconnect?: () => void
}

export const WalletButtonDisconnect: FC<WalletButtonDisconnectProps> = observer(({ onDisconnect }) => {
  const [tonConnectUI] = useTonConnectUI()
  const walletAddress = useTonAddress()

  const { gameStatusStore } = useStores()

  const onClick = useCallback(async () => {
    if (walletAddress) {
      await tonConnectUI.disconnect()
      gameStatusStore.restore()
      onDisconnect?.()
    }
  }, [tonConnectUI, walletAddress, gameStatusStore])
  
  return (
    <Txt size={'md'} className={classes.button} onClick={onClick}>
      Disconnect
    </Txt>
  )
})