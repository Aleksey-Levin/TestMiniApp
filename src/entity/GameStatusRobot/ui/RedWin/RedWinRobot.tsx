import { observer } from "mobx-react-lite"

import InitIcon from '/assets/Red won.gif'
import robotClasses from '../GameStatusRobot.module.scss'

export const RedWinRobot = observer(() => {
  return (
    <img src={InitIcon} className={robotClasses.robot} />
  )
})