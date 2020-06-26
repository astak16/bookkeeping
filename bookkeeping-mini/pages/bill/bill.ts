import {BasePage} from "../../utils/BasePage";

const app = getApp()
Page(new class Bill extends BasePage {
  tagsHeight!: number

  onLoad(options: any) {
    super.onLoad(options)

  }

  onNumberPadClick() {
    const {record} = app.globalData
    this.asyncPostRecord(record)

  }

  async asyncPostRecord(data: RecordItem) {
    return await this.http.request({
      url: `/record`,
      method: "POST",
      data: JSON.stringify(data)
    })
  }

})
