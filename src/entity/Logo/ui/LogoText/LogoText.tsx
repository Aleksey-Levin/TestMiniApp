import { observer } from "mobx-react-lite"

import LgooTextIcon from '/assets/Logo.png'
import classes from './LogoText.module.scss'

export const LogoText = observer(() => {
  return (
    <img className={classes.logo} src={LgooTextIcon} />
  )
})