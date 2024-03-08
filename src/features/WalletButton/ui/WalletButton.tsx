
import { observer } from "mobx-react-lite"
import { useState } from "react"

import { WalletMenuBalance } from "../../../entity/WalletMenu/ui/Balance/WalletMenuBalance.tsx"
import { WalletButtonEntity } from "../../../entity/WalletMenu/ui/WalletButton/WalletButtonEntity.tsx"
import { WalletButtonDisconnect } from "./Disconnect/WalletButtonDisconnect.tsx"
import classes from "./WalletButton.module.scss"

export const WalletButton = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  return (
    <div className={classes.content}>
      <WalletButtonEntity onClick={() => {
        setIsOpen((prev) => !prev)
      }}
      />
      {isOpen && (
        <div className={classes.hiddenContent}>
          <WalletMenuBalance />
          <WalletButtonDisconnect onDisconnect={() => {
            setIsOpen(false)
          }}
          />
        </div>
      )}
    </div>
  )
})