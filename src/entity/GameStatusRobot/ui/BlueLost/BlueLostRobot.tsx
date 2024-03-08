import { observer } from "mobx-react-lite"

import InitIcon from '/assets/Blue lost.gif'
import robotClasses from '../GameStatusRobot.module.scss'

export const BlueLostRobot = observer(() => {
  return (
    <img src={InitIcon} className={robotClasses.robot} />
  )
})