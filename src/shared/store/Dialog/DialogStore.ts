import { action, makeAutoObservable } from 'mobx'
import type { ComponentType, ReactNode } from 'react'

import { DialogCall, DialogInstance } from "../../lib/dialog/dialog-call.ts"
import { AppDialogProps } from "../../lib/dialog/dialog-props.ts"
import { AlertSnackbar } from "../../ui/display/Alert/AlertSnackbar.tsx"


export class DialogRef {
  public closeListeners: Array<() => void> = []

  constructor(private readonly id: number, public dialogStore: DialogStore) {
  }

  close(): void {
    this.dialogStore.closeById(this.id)
  }

  onClose(listener: () => void): void {
    this.closeListeners.push(listener)
  }
}

export class DialogStore {
  instances: DialogInstance[] = []

  count = 0

  constructor() {
    makeAutoObservable(this, {
      count: false,
    })
  }

  open<Props extends AppDialogProps>(call: DialogCall<Props>) {
    this.count++
    const id = this.count
    const ref = new DialogRef(id, this)
    this.instances.push({
      ...call,
      id,
      open: true,
      onClose: () => {
        ref.closeListeners.forEach((listener) => listener())
      },
    })

    return ref
  }

  private closeByIndex(index: number): void {
    if (index < 0) return

    const instance = this.instances[index]

    instance.open = false
    instance.onClose?.()
    setTimeout(action(() => {
      this.instances = this.instances.filter(({ id }) => id !== instance.id)
    }), 1000)
  }

  closeById(id: number): void {
    const openIndex = this.instances.findIndex((instance) => instance.id === id)
    this.closeByIndex(openIndex)
  }

  showError(body: ReactNode): DialogRef {
    return this.open({
      Component: AlertSnackbar,
      props: {
        severity: 'error',
        body,
      },
    })
  }

  showSuccess(body: ReactNode): DialogRef {
    return this.open({
      Component: AlertSnackbar,
      props: {
        severity: 'success',
        body,
      },
    })
  }

  showWarning(body: ReactNode): DialogRef {
    return this.open({
      Component: AlertSnackbar,
      props: {
        severity: 'warning',
        body,
      },
    })
  }

  // not working
  close(component: ComponentType<AppDialogProps>): void {
    const index = this.instances.findIndex(({ Component }) => Component === component)
    this.closeByIndex(index)
  }

  get openCount(): number {
    return this.instances.length
  }
}
