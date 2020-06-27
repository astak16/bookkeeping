import {BasePage} from "../../utils/BasePage";

Page(new class Index extends BasePage {
  async onLoad(options: any) {
    super.onLoad(options)
  }

  async onShow() {
    await this.asyncGetRecord()
  }

  async asyncGetRecord() {
    const records: any = await this.http.request({url: `/record`})
    records.forEach((item: any) => {
      item.day = item.date.toString().slice(6)
    })
    this.setData({records})
  }
})


