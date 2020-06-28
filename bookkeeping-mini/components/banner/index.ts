import {BaseComponent} from "../../utils/BaseComponent";
// import Event = WechatMiniprogram.Event;

Component(new class Banner extends BaseComponent {
  properties = {
    pay: {
      type: Number,
      value: 0
    },
    income: {
      type: Number,
      value: 0
    },
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
