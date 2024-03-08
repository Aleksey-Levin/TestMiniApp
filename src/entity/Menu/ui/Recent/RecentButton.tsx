import { observer } from "mobx-react-lite"

import MenuIcon from '/assets/Recent.png'
import { Button } from "../../../../shared/ui/control/Button"

export const RecentButton = observer(() => {
  return (
    <Button as={'button'} backgroundImage={MenuIcon} size={'xsm'} />
  )
})