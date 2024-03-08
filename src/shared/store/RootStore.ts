import { enableStaticRendering } from "mobx-react-lite"

import { DialogStore } from "./Dialog/DialogStore.ts"
import { ErrorStore } from "./Error/ErrorStore.ts"
import { UserStore } from "./UserStore/UserStore.ts"

enableStaticRendering(typeof window === "undefined")

export class RootStore {
  errorStore: ErrorStore
  dialogStore: DialogStore
  userStore: UserStore

  constructor() {
    this.dialogStore = new DialogStore()
    this.errorStore = new ErrorStore(this)
    this.userStore = new UserStore()
  }
}

export const rootStore = new RootStore()
