import {BaseComponent} from "../../utils/BaseComponent";
// import Event = WechatMiniprogram.Event;

Component(new class Banner extends BaseComponent {
  methods = {
    onAddClick() {
      // console.log(e)
      wx.navigateTo({
        url:`/pages/bill/bill`
      })
    }
  }
})
