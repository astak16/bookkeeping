import {BaseComponent} from "../../utils/BaseComponent";
import Event = WechatMiniprogram.Event;
import {EventBus, zeroPrice} from "../../utils/util";
import DataOption = WechatMiniprogram.Behavior.DataOption;

const computedBehavior = require('miniprogram-computed')

Component(new class NumberPad extends BaseComponent {
  data: DataOption = {
    year: 0,
    month: 0,
    date: 0,
    formatDate: '',
    price: '0'
  }
  behaviors = [computedBehavior]

  computed = {
    price(data: DataOption) {
      const {price} = data
      const handlePrice = zeroPrice(price)
      EventBus.emit('price', {price: handlePrice})
      return price
    }
  }

  ready() {
    const _this = this as any
    _this.initDate()
  }

  detached() {
    const _this = this as any
    EventBus.off('price')
    _this.resetPrice()
  }

  methods = {
    onCalendarShowClick() {
      const _this = this as any
      const {formatDate} = _this.data
      _this.setData({show: true, formatDate})
    },
    onCalendarClick(e: any) {
      const _this = this as any
      const {formatDate} = e.detail
      const [year, month, date] = formatDate.split('-')
      _this.setData({
        year, month, date,
        formatDate,
        highlight: true
      })
    },
    onEditClick() {
      const _this = this as any
      const {formatDate} = _this.data
      wx.navigateTo({
        url: `/pages/edit/edit?date=${formatDate}`
      })
    },
    initDate() {
      const _this = this as any
      const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      const date = new Date().getDate()
      _this.setData({
        year, month, date,
        formatDate: `${year}-${month}-${date}`
      })
    },
    onButtonContentClick(e: Event) {
      const _this = this as any
      const content = e.currentTarget.dataset.content
      const {price} = _this.data
      let interimPrice: string = price
      if (price.length === 16) return;
      // 如果第一次点击为 0 时，第一位不能显示 0
      if (price === '0') {
        if ('1234567890'.indexOf(content) > -1) {
          interimPrice = content
        } else {
          interimPrice += content
        }
        _this.setData({price: interimPrice})
        return
      }
      if (interimPrice.indexOf('.') > -1 && content === '.') return
      if (interimPrice.indexOf('.') > -1 && !/^[0-9]+.[0-9]?$/.test(interimPrice)) return
      interimPrice += content
      _this.setData({price: interimPrice})
    },
    onButtonOKClick() {
      const _this = this as any
      const {price} = _this.data
      console.log(price)
    },
    onrButtonResetClick() {
      const _this = this as any
      _this.resetPrice()
    },
    resetPrice(){
      const _this = this as any
      _this.setData({price: '0'})
    }
  }
})
