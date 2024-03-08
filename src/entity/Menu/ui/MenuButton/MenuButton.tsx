import { observer } from "mobx-react-lite"
import { FC } from "react"

import MenuIcon from '/public/assets/Menu.png'
import { Button } from "../../../../shared/ui/control/Button"

interface MenuButtonProps {
  onClick?: () => void
}

export const MenuButton: FC<MenuButtonProps> = observer(({ onClick }) => {
  return (
    <Button
      as={'button'}
      backgroundImage={MenuIcon}
      size={'sm'}
      onClick={onClick}
    />
  )
})