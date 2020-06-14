import {BaseComponent} from "../../utils/BaseComponent";
import Event = WechatMiniprogram.Event;
// const app = getApp()

Component(new class Tabs extends BaseComponent {
  data = {
    tabs: [{
      text: "收入",
      type: "+"
    }, {
      text: "支出",
      type: "-"
    }],
    currentType:'-'
  }
  methods = {
    onTabClick(e: Event) {
      const _this = this as any
      const {type} = e.currentTarget.dataset
      _this.setData({currentType: type})
      // app.globalData.record.type = type
      // console.log(app)
    }
  }
})
