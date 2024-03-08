import { observer } from "mobx-react-lite"
import { FC } from "react"

import Double from "/assets/Try again.png"
import { Button } from "../../../../shared/ui/control/Button"

interface TryAgainGameStatusButtonProps {
  onClick?: () => void
}
export const TryAgainGameStatusButton: FC<TryAgainGameStatusButtonProps> = observer(({ onClick }) => {
  return (
    <Button
      as={'button'}
      backgroundImage={Double}
      size={'lg'}
      onClick={onClick}
    />
  )
})