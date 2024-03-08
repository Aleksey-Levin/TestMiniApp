import { observer } from "mobx-react-lite"

import InitIcon from '/assets/Blue won.gif'
import robotClasses from '../GameStatusRobot.module.scss'

export const BlueWinRobot = observer(() => {
  return (
    <img src={InitIcon} className={robotClasses.robot} />
  )
})