import {BaseComponent} from "../../utils/BaseComponent";
import Event = WechatMiniprogram.Event;
import DataOption = WechatMiniprogram.Component.DataOption;
import {EventBus, MonkeyTest} from "../../utils/util";
import {record_type, RecordType} from "../../model";


Component(new class Tabs extends BaseComponent {
  data: DataOption = {
    tabs: [{
      text: "收入",
      type: record_type.add
    }, {
      text: "支出",
      type: record_type.pay
    }],
    currentType: record_type.pay
  }
  methods = {
    onTabClick(e: Event) {
      if(MonkeyTest.isMonkey())return
      const _this = this as any
      const type = e.currentTarget.dataset.type as RecordType
      _this.setData({currentType: type})
      EventBus.emit("recordType", <{ type: RecordType }>{type})
    },
    onCloseClick() {
      wx.navigateBack({delta: 1})
    }
  }
})
