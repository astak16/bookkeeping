import {BaseComponent} from "../../utils/BaseComponent";
// import EventChannel = WechatMiniprogram.EventChannel;
import {EventBus} from "../../utils/util";
import DataOption = WechatMiniprogram.Behavior.DataOption;
// import EventChannel = WechatMiniprogram.EventChannel;

Component(new class NumberPad extends BaseComponent {
  data: DataOption = {
    price: '0.00'
  }

  ready() {
    const _this = this as any
    EventBus.on('price', (data: any) => {
      _this.setData({price: data.price})
    })
  }
})
