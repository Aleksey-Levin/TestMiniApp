import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'

import { AppDialogProps } from "../../../lib/dialog/dialog-props.ts"
import classes from './AlertSnackbar.module.scss'

export interface AlertSnackbarProps extends AppDialogProps {
  severity: AlertColor, // color
  title?: ReactNode,
  body: ReactNode, // text
  duration?: number,
}

export const AlertSnackbar: React.FC<AlertSnackbarProps> = observer(({
  severity,
  title,
  body,
  duration = 5000,
  open,
  onClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={onClose}
    >
      <Alert severity={severity} className={classes.snackbarAlert}>
        {!!title && <AlertTitle>{title}</AlertTitle>}
        {body}
      </Alert>
    </Snackbar>
  )
})
