import {BaseComponent} from "../../utils/BaseComponent";
// import Event = WechatMiniprogram.Event;

Component(new class Banner extends BaseComponent {
  properties = {
    price: Object
  }
  methods = {
    onAddClick() {
      // console.log(e)
      wx.navigateTo({
        url: `/pages/bill/bill`
      })
    }
  }
})
