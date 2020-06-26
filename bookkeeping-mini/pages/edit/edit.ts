import {BasePage} from "../../utils/BasePage";

const app = getApp()
Page(new class Edit extends BasePage {
  data = {
    length: 0,
    paddingBottom: 40,
    date: '',
    text: ''
  }

  onLoad(option: any) {
    const [year, month, date] = option.date.split('-')
    wx.onKeyboardHeightChange(res => {
      let paddingBottom = 0
      if (res.height === 0) paddingBottom = 40

      this.setData({
        paddingBottom,
        height: res.height * 2,
      })
    })
    this.setData({
      date: `${year}年${month}月${date}日`
    })
  }

  onCalendarClick() {
    this.setData({show: true, date: ''})
  }

  onChange(e: any) {
    const {value} = e.detail
    const length = value.length
    if (length >= 140)
      wx.showToast({title: '输入超过了最大值', icon: 'none'})
    this.setData({length, text: value})
  }

  onFinishClick() {
    const {text} = this.data
    app.globalData.record.remark = text
    this.goBack()
  }

  onCloseClick() {
    this.goBack()
  }

  goBack() {
    this.setData({text: ''})
    wx.navigateBack({delta: 1})
  }
})
