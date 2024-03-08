import { useTonAddress, useTonConnectModal, useTonConnectUI } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { useCallback } from "react"

import { ConnectWalletButtonEntity } from "../../entity/Wallet/ui/ConnectWalletButton/ConnectWalletButtonEntity.tsx"
import { useStores } from "../../shared/store/StoreProvider.tsx"

export const ConnectWalletButton = observer(() => {
  const { open } = useTonConnectModal()
  const [tonConnectUI] = useTonConnectUI()
  const walletAddress = useTonAddress()

  const { gameStatusStore } = useStores()

  const onClick = useCallback(async () => {
    if (walletAddress) {
      await tonConnectUI.disconnect()
      gameStatusStore.restore()
    }
    else open()
  }, [open, tonConnectUI, walletAddress, gameStatusStore])

  return (
    <ConnectWalletButtonEntity onClick={onClick} />
  )
})