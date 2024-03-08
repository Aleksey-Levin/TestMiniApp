import { Api,HttpClient } from 'tonapi-sdk-js'

const httpClient = new HttpClient({
  baseUrl: 'https://tonapi.io/',
  baseApiParams: {
    headers: {
      Authorization: `Bearer AG2S7LKLS4YIRMIAAAAKEZA7NNHF5337P2B7MTL7ZQEPCIXFLOEK6PZFOTJ7UYYOF3IWCQY`,
      'Content-type': 'application/json',
    },
  },
})

export const client = new Api(httpClient)