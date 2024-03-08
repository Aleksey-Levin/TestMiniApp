import { observer } from "mobx-react-lite"

import InitIcon from '/assets/Neutral.gif'
import robotClasses from '../GameStatusRobot.module.scss'

export const LoadingGameStatusesRobot = observer(() => {
  return (
    <img src={InitIcon} className={robotClasses.robot} />
  )
})