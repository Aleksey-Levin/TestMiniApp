import { observer } from "mobx-react-lite"

import MenuIcon from '/assets/Stats.png'
import { Button } from "../../../../shared/ui/control/Button"

export const StatsButton = observer(() => {
  return (
    <Button as={'button'} backgroundImage={MenuIcon} size={'xsm'} />
  )
})