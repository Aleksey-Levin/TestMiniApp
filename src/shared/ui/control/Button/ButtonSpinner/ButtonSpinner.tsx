import CircularProgress from '@mui/material/CircularProgress'
import { observer } from "mobx-react-lite"
import React from 'react'

import classes from './ButtonSpinner.module.scss'

export interface ButtonSpinnerProps {
  isLoading?: boolean
}

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = observer(({ isLoading }) => {
  if (!isLoading) {
    return null
  }

  return (
    <div className={classes.spinnerWrapper}>
      <CircularProgress className={classes.spinner} />
    </div>
  )
})
