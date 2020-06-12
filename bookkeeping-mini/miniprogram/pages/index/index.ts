import {BasePage} from "../../utils/BasePage";

Page(new class Index extends BasePage {
  // private options:WashOrderConfirm.TPageOptions
  public data = {
    aa: '113'
  };

  // private options: WashOrderConfirm.TPageOptions = {
  //   orderId: ''
  // };

  // onLoad(options: WashOrderConfirm.TPageOptions) {
  //   this.options = options
  //   this.setData({aa: 1})
  // }
  // private options: any = {ab: 11}

  onLoad() {
    this.setData({aa:""})
    // console.log(this)
    // this.options = options
    // console.log(this.options)
    // this.setData({aa: 1})
  }
  onClick(){
    console.log('page Click')
  }
})

// Page({})
