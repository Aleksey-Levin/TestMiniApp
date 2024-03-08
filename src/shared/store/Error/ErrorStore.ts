import { makeAutoObservable } from 'mobx'
import { ReactNode } from 'react'

import type { DialogStore } from '../Dialog/DialogStore.ts'
import type { RootStore } from '../RootStore.ts'

export class ErrorStore {

  dialogStore: DialogStore

  constructor({ dialogStore }: RootStore) {
    this.dialogStore = dialogStore
    makeAutoObservable(this, {
      dialogStore: false,
    })
  }

  // в основном error: string, но технически можно что угодно пихнуть
  showError = (error: ReactNode) => {
    this.dialogStore.showError(error)
  }

}
