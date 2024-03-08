import { ComponentType } from 'react'

import { AppDialogProps } from './dialog-props'

export interface DialogCall<Props extends AppDialogProps = AppDialogProps> {
  Component: ComponentType<Props>
  props?: Omit<Props, keyof AppDialogProps>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DialogInstance extends DialogCall<any> {
  id: number
  open: boolean
  onClose: () => void // used to notify that dialog has been closed
}
