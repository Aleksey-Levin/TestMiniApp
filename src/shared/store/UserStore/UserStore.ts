import { makeAutoObservable } from 'mobx'

import { ActivateDeactivate } from "../../lib/store/activate.ts"
import {InitData} from "@tma.js/sdk";
import axios from "axios";

interface IUserData {
  "earning": string,
  "ref_earning": string,
  "ref_link": string,
  "total_earned": string,
  "total_ref_earned": string,
  "user_balance": string
}


export class UserStore implements ActivateDeactivate {
  data: InitData | undefined = undefined
  isActivated: boolean = false

  userData: IUserData| undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }

  async activate(initData?: InitData): Promise<void> {
    this.data = initData
  }

  mine() {
    axios.post<IUserData>('http://5.42.84.144:8080/api/endpoint', {
      "user_id": this.data?.user?.id.toString()
    }, {
      headers: {
        Authorization: `Bearer 12345`
      }
    }).then(res => this.userData = res.data)
  }

  reset() {
    this.data = undefined
    this.isActivated = false
  }

  deactivate(): void {
    this.reset()
  }

}
