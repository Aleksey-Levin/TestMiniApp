import { observer } from "mobx-react-lite"

import MenuIcon from '/assets/League.png'
import { Button } from "../../../../shared/ui/control/Button"

export const LeagueButton = observer(() => {
  return (
    <Button as={'button'} backgroundImage={MenuIcon} size={'xsm'} />
  )
})