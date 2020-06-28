import {BasePage} from "../../utils/BasePage";
import {formatNumber, setWatcher} from "../../utils/util";

Page(new class Index extends BasePage {
  month!: number
  noMore: boolean = false
  pay!: number
  top!: number
  scrollTop: number[] = []
  scrollPrice: number[] = []
  data = {
    records: [],
    price: {},
    scrollArea: 1,
    currentTop: 0
  }

  async onLoad(options: any) {
    super.onLoad(options)
    setWatcher(this)
  }

  watch = {
    currentTop(value: number) {
      const _this = this as any
      _this.setData({
        price: _this.scrollPrice[value]
      })
    }
  }

  async onShow() {
    this.initInfo()
    await this.asyncGetRecord()
  }

  initInfo() {
    this.getTime()
    this.noMore = false
    this.data.records = []
  }

  async asyncGetRecord() {
    const data: any = await this.http.request({url: `/record/${this.month}`})
    if (data.length === 0) {
      this.noMore = true
      return
    }
    data.forEach((item: any) => {
      item.day = item.date.toString().slice(6)
      item.month = this.setMonth(item.date)
    })
    let records: any[] = this.data.records
    records = [...records, ...data]
    this.setData({records})
    await this.asyncGetTotalPrice()
  }

  setMonth(date: number): any {
    const currentMonth = new Date().getMonth() + 1
    const month: string = date.toString().slice(4, 6)
    if (+month !== currentMonth) {
      return month + '月'
    }
  }

  async asyncGetTotalPrice() {
    const price: any = await this.http.request({url: `/record/${this.month}/price`})
    this.scrollPrice.push(price)
    this.setData({price})
  }

  async onScrollToLower() {
    if (this.noMore) return
    this.month -= 1
    const scrollTop: number = this.top
    this.scrollTop.push(scrollTop)
    await this.asyncGetRecord()
  }

  onScroll(e: any) {
    this.top = e.detail.scrollTop
    this.scrollTop.map((scroll: number, key: number) => {
      if (Math.abs(scroll - this.top) <= 30)
        this.data.currentTop = key
    })
  }

  getTime() {
    const month: number = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    const formatMonth = formatNumber(month)
    this.month = +(year + formatMonth)
  }
})


