import { makeAutoObservable } from 'mobx'

import { ActivateDeactivate } from "../../lib/store/activate.ts"
import {InitData} from "@tma.js/sdk";
import axios from "axios";

export class UserStore implements ActivateDeactivate {
  data: InitData | undefined = undefined
  isActivated: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  async activate(initData?: InitData): Promise<void> {
    this.data = initData
  }

  mine() {
    axios.post('/api/endpoint', {
      "user_id": this.data?.user?.id.toString()
    }, {
      headers: {
        Authorization: `Bearer 12345`
      }
    })
  }

  reset() {
    this.data = undefined
    this.isActivated = false
  }

  deactivate(): void {
    this.reset()
  }

}
