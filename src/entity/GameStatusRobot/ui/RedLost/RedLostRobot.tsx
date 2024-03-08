import { observer } from "mobx-react-lite"

import InitIcon from '/assets/Red lost.gif'
import robotClasses from '../GameStatusRobot.module.scss'

export const RedLostRobot = observer(() => {
  return (
    <img src={InitIcon} className={robotClasses.robot} />
  )
})