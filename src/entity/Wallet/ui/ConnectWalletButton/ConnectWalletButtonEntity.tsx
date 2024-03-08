import { observer } from "mobx-react-lite"
import { FC } from "react"

import { Button } from "../../../../shared/ui/control/Button"

interface ConnectWalletButtonEntity {
  onClick?: () => void
}

export const ConnectWalletButtonEntity: FC<ConnectWalletButtonEntity> = observer(({ onClick }) => {
  return (
    <Button
      as={'button'}
      fullSize
      size={'lg'}
      onClick={onClick}
    />
  )
})