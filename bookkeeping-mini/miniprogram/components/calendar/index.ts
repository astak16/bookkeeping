import {BaseComponent} from "../../utils/BaseComponent";
import Event = WechatMiniprogram.Event;

type YearMonthDate = {
  year: number,
  month: number,
  date: number
}

const MonthState = Object.freeze({
  Prev: 'prev',
  Next: 'next'
})

Component(new class Calendar extends BaseComponent {
  data = {
    year: '',
    month: '',
    date: '',
    selectedDate: "",
    thisMonthDates: []
  }
  properties = {
    show: {
      type: Boolean,
      value: false,
      observer(show: boolean) {
        const _this = this as any
        if (show)
          _this.setData({enter: show, onceShow: true})
      }
    },
    value: {
      type: String,
      value: '-1',
      observer(value: string) {
        // 2020-6-15
        console.log(value)
        const _this = this as any
        const year = +(value.split("-")[0])
        const month = +(value.split("-")[1]) - 1
        const date = +(value.split("-")[2])
        _this.data.selectedDate = value
        _this.setData({year, month, date}, () => {
          // _this.initDate()
          _this.createDays()
          _this.createEmptyDays()
        })
      }
    },
    isToday: {
      type: Boolean,
    }
  }

  methods = {
    initDate() {
      const _this = this as any
      let {year, month, date} = _this.data
      if (year && month && date) return
      {
      }

      _this.data.selectedDate = _this.formatDate({year, month, date})
      _this.setData({year, month, date})
    },
    onSelectDateClick(e: Event) {
      const _this = this as any
      const {formatdate, type} = e.currentTarget.dataset
      const {selectedDate} = _this.data
      if (formatdate === selectedDate) return
      _this.toggleMonth(type)
      _this.setSelectedDateGrid(formatdate)
      console.log(formatdate)
    },
    onToggleMonthClick(e: Event) {
      const _this = this as any
      const {type} = e.currentTarget.dataset
      _this.toggleMonth(type)
    },
    onClickMask() {
      const _this = this as any
      _this.setData({show: false, value: '-1'})
    },
    toggleMonth(type: string) {
      const _this = this as any
      if (type === MonthState.Prev) {
        _this.prevMonth()
      } else if (type === MonthState.Next) {
        _this.nextMonth()
      }
    },
    onConfirmClick() {
      const _this = this as any
      const {selectedDate} = _this.data

      _this.triggerEvent('utap', {
        formatDate: selectedDate,
        timestamp: new Date(selectedDate).getTime()
      })
      _this.onClickMask()
    },
    prevMonth() {
      const _this = this as any
      const {year, month} = _this.data
      const {prevYear, prevMonth} = _this.prevYear(year, month)
      _this.setData({year: prevYear, month: prevMonth}, () => {
        _this.createDays()
        _this.createEmptyDays()
      })
    },
    nextMonth() {
      const _this = this as any
      const {year, month} = _this.data
      const {nextYear, nextMonth} = _this.nextYear(year, month)
      _this.setData({year: nextYear, month: nextMonth}, () => {
        _this.createDays()
        _this.createEmptyDays()
      })
    },
    createDays() {
      const _this = this as any
      const thisMonthDates: any[] = []
      const {year, month} = _this.data
      const thisMonthTotalDate = _this.getThisMonthDays(year, month)
      for (let date = 1; date <= thisMonthTotalDate; date++) {
        const monthGrid = _this.formatMonthGrid({year, month, date})
        thisMonthDates.push(monthGrid)
      }
      _this.data.thisMonthDates = thisMonthDates
      _this.setData({thisMonthTotalDate})
    },
    createEmptyDays() {
      const _this = this as any
      let {year, month, thisMonthDates} = _this.data
      const firstDayWeek = _this.getThisDateWeek({year, month, date: 1})
      const emptyGridsBefore = _this.getBeforeMonthEmpty(firstDayWeek)
      const emptyGridsAfter = _this.getAfterMonthEmpty(firstDayWeek)
      thisMonthDates = [...emptyGridsBefore, ...thisMonthDates, ...emptyGridsAfter]
      _this.setData({thisMonthDates})
    },
    getBeforeMonthEmpty(firstDayWeek: number) {
      const _this = this as any
      const {year, month} = _this.data
      const emptyGridsBefore: any[] = []
      const {prevYear, prevMonth} = _this.prevYear(year, month)
      const prevMonthDay = _this.getThisMonthDays(year, prevMonth)

      for (let i = 1; i <= firstDayWeek; i++) {
        const date = prevMonthDay - (firstDayWeek - i)
        const monthGrid = _this.formatMonthGrid({year: prevYear, month: prevMonth, date}, MonthState.Prev)
        emptyGridsBefore.push(monthGrid)
      }
      return emptyGridsBefore
    },
    getAfterMonthEmpty(firstDayWeek: number) {
      const _this = this as any
      const emptyGridsAfter: any[] = []
      const {thisMonthTotalDate, year, month} = _this.data
      const {nextYear, nextMonth} = _this.nextYear(year, month)

      const nextMonthDay = 42 - thisMonthTotalDate - firstDayWeek - 7 >= 0 ?
        42 - thisMonthTotalDate - firstDayWeek - 7 :
        42 - thisMonthTotalDate - firstDayWeek
      for (let date = 1; date <= nextMonthDay; date++) {
        const monthGrid = _this.formatMonthGrid({year: nextYear, month: nextMonth, date}, MonthState.Next)
        emptyGridsAfter.push(monthGrid)
      }
      return emptyGridsAfter
    },
    formatMonthGrid({year, month, date}: YearMonthDate, state?: string) {
      const _this = this as any
      const formatDate = this.formatDate({year, month, date})
      const isSelectedDate = _this.defaultSelectedDateGrid(formatDate, state)
      const isEmptyDate = _this.isEmptyDateGrid(month)
      const week = _this.getThisDateWeek({year, month, date})
      const defaultHighlight = _this.setHighlight(formatDate)
      return {
        year,
        month,
        date,
        formatDate,
        week,
        isSelectedDate,
        isEmptyDate,
        defaultHighlight,
        monthState: state
      }
    },
    setSelectedDateGrid(formatDate: string) {
      const _this = this as any
      const {thisMonthDates} = _this.data
      let selectedDate: string = ''
      thisMonthDates.forEach((thisMonthDate: any) => {
        if (thisMonthDate.formatDate === formatDate) {
          thisMonthDate.isSelectedDate = true
          selectedDate = thisMonthDate.formatDate
        } else {
          thisMonthDate.isSelectedDate = false
        }
      })
      _this.data.selectedDate = selectedDate
      _this.setData({thisMonthDates})
    },
    defaultSelectedDateGrid(formatDate: string, state: string) {
      const _this = this as any
      const {selectedDate} = _this.data
      // 只高亮当月，上月和下月的不高亮
      return formatDate === selectedDate && !state
    },
    setHighlight(formatDate: string) {
      const _this = this as any
      let {value, isToday} = _this.data
      if (isToday) {
        const {year, month, date} = _this.getThisDate()
        value = _this.formatDate({year, month, date})
      }
      return value === formatDate
    },

    isEmptyDateGrid(month: number) {
      const _this = this as any
      const {month: thisMonth} = _this.data
      return month !== thisMonth
    },

    formatDate({year, month, date}: YearMonthDate) {
      return `${year}-${month + 1}-${date}`
    },

    prevYear(year: number, month: number) {
      const prevYear = month === 0 ? year - 1 : year
      const prevMonth = month === 0 ? 11 : month - 1
      return {prevYear, prevMonth}
    },
    nextYear(year: number, month: number) {
      const nextYear = month === 11 ? year + 1 : year
      const nextMonth = month === 11 ? 0 : month + 1
      return {nextYear, nextMonth}
    },

    getThisDateWeek({year, month, date}: YearMonthDate) {
      return new Date(Date.UTC(year, month, date)).getDay()
    },
    getThisMonthDays(year: number, month: number) {
      return new Date(year, month + 1, 0).getDate()
    },
    getThisDate() {
      const year = new Date().getFullYear()
      const month = new Date().getMonth()
      const date = new Date().getDate()
      return {year, month, date}
    }
  }
})
