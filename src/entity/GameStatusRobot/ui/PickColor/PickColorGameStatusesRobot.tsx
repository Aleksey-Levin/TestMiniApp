import { observer } from "mobx-react-lite"

import InitIcon from '/assets/SmilingPickColorBase.gif'
import robotClasses from '../GameStatusRobot.module.scss'

export const PickColorGameStatusesRobot = observer(() => {
  return (
    <img src={InitIcon} className={robotClasses.robot} />
  )
})