import {BasePage} from "../../utils/BasePage";
import {RecordType, Tag} from "../../model";
import {clone} from "../../utils/util";
import Event = WechatMiniprogram.Event;

Page(new class EditTag extends BasePage {
  tags!: Tag[]
  recordType!: RecordType
  data = {
    tags: []
  }

  onLoad(options: any) {
    this.recordType = <RecordType>decodeURIComponent(options.recordType)
    this.initTags()
  }

  initTags() {
    this.tags = wx.getStorageSync(`tags-${this.recordType}`)
    this.setTags()
  }

  onStateClick(e: Event) {
    const {id} = e.currentTarget.dataset
    const tags = this.tags
    tags.forEach(tag => {
      if (tag.id === +id)
        tag.checked = +(!tag.checked)
    })
    wx.setStorageSync(`tags-${this.recordType}`, tags)
    this.setTags()
  }

  setTags() {
    const tags = clone(this.tags)
    tags.pop()
    this.setData({tags})
  }
})


