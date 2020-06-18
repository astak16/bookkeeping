import {BaseComponent} from "../../utils/BaseComponent";
import {EventBus} from "../../utils/util";
import DataOption = WechatMiniprogram.Component.DataOption;

Component(new class NumberPad extends BaseComponent {
  data: DataOption = {
    price: '0.00',
    tag: {iconId: 1, name: "早餐"}
  }

  ready() {
    const _this = this as any
    _this.bindEvents()
  }

  methods = {
    bindEvents() {
      const _this = this as any
      EventBus.on('recordPrice', (data: any) => _this.setData({price: data.price}))
      EventBus.on('recordTag', (data: any) => _this.setData({tag: data.tag}))
    }
  }
})
