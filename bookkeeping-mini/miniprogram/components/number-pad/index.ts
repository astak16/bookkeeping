import {BaseComponent} from "../../utils/BaseComponent";

Component(new class NumberPad extends BaseComponent {
  date = {
    year: 0,
    month: 0,
    date: 0,
    formatDate: ''
  }

  ready() {
    const _this = this as any
    _this.initDate()
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
    onEditClick(){
      const _this = this as any
      const {formatDate} = _this.data
      wx.navigateTo({
        url:`/pages/edit/edit?date=${formatDate}`
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
    }
  }
})
