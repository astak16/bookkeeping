import {
  config
} from '../config'

// import {
//   Base64
// } from './base64.js'
//
// import {
//   Token
// } from '../models/token.js'


// console.log(Base64)

// const tips = {
//   1: '抱歉，出现了一个错误',
//   1005: 'appkey无效，请前往www.7yue.pro申请',
// }
// # 解构

type Method = "GET" | "POST" | "DELETE" | "PUT"
type RequestParam = {
  url: string,
  data?: any,
  method?: Method
}

class HTTP {
  request({url, data = {}, method = 'GET'}: RequestParam) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }

  // 2小时
  // token1 1小时59分59秒 超过2小时
  // 退出
  // 自动 无感知帮助他重新刷新令牌
  // 退出 短时间 二次重发机制
  _request(url: string, resolve: any, reject: any, data = {}, method: Method = 'GET', noRefetch = false) {
    wx.request({
      url: config.api_base_url + url,
      method,
      data: data,
      header: {
        'content-type': 'application/json',
        // Authorization: this._encode()
      },
      success: (res: any) => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          if (code == '403') {
            if (!noRefetch) {
              // this._refetch(
              //   url,
              //   resolve,
              //   reject,
              //   data,
              //   method
              // )
            }
          } else {
            reject()
            // const error_code = res.data.error_code
            // this._show_error(error_code)
          }
        }
      },
      fail: (_err: any) => {
        reject()
        // this._show_error(1)
      }
    })

  }

  // _show_error(error_code:any) {
  //   if (!error_code) {
  //     error_code = 1
  //   }
  //   const tip = tips[error_code]
  //   wx.showToast({
  //     title: tip ? tip : tips[1],
  //     icon: 'none',
  //     duration: 2000
  //   })
  // }

  // _refetch(...param:any) {
  // var token = new Token();
  // token.getTokenFromServer((token) => {
  //   this._request(...param, true);
  // });
  // }

  // _encode() {
  // const token = wx.getStorageSync('token')
  // const base64 = new Base64()
  // const result = base64.encode(token + ':')
  // console.log(result)
  // return 'Basic ' + result
  // }


}

export {
  HTTP
}