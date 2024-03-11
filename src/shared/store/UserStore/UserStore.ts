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
  "user_balance": string,
  "round_ending": string,
  "language": string
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
    axios.post<IUserData>('/api/endpoint', {
      "user_id": this.data?.user?.id.toString()
    }, {
      headers: {
        Authorization: `Bearer 12345`,
      },
    }).then(res => this.userData = res.data)
    // const data = {
    //   "user_id": this.data?.user?.id.toString()
    // }
    // fetch('https://5.42.84.144:8080/api/endpoint', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer 12345`,
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   referrerPolicy: 'unsafe-url',
    //   body: JSON.stringify(data)
    // }).then(async res => {
    //   const result = await res.json()
    //   console.log(result)
    //   this.userData = result
    // })
  }

  reset() {
    this.data = undefined
    this.isActivated = false
  }

  deactivate(): void {
    this.reset()
  }

}
