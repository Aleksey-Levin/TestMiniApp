import { useTonAddress } from "@tonconnect/ui-react"
import clsx from "clsx"
import { observer } from "mobx-react-lite"
import { FC } from "react"

import WalletImg from '/assets/Wallet.png'
import { Button } from "../../../../shared/ui/control/Button"
import classes from './WalletButtonEntity.module.scss'

interface WalletButtonEntity {
  onClick?: () => void
}

export const WalletButtonEntity: FC<WalletButtonEntity> = observer(({ onClick }) => {
  const walletAddress = useTonAddress()
  
  return (
    <Button
      as={'button'}
      size={'sm'}
      backgroundImage={WalletImg}
      className={clsx({
        [classes.transparent]: !walletAddress,
      })}
      onClick={onClick}
    />
  )
})