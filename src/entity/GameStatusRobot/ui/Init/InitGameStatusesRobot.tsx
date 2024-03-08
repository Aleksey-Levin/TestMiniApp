import { observer } from "mobx-react-lite"

import InitIcon from '/assets/Smiling.gif'
import robotClasses from '../GameStatusRobot.module.scss'

export const InitGameStatusesRobot = observer(() => {
  return (
    <img src={InitIcon} className={robotClasses.robot} />
  )
})