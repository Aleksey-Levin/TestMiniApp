import { observer } from "mobx-react-lite"

import EnterAmountImg from '/assets/Enter amount.png'
import classes from './EnterAmount.module.scss'

export const EnterAmount = observer(() => {
  return (
    <img className={classes.enterAmount} src={EnterAmountImg} />
  )
})