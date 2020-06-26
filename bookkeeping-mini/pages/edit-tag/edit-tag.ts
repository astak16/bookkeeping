import {BasePage} from "../../utils/BasePage";
import {clone, EventBus} from "../../utils/util";
import Event = WechatMiniprogram.Event;

Page(new class EditTag extends BasePage {
  tags!: Tag[]
  recordType!: RecordType
  data = {
    tags: []
  }

  onLoad(options: any) {
    super.onLoad(options)
    this.recordType = <RecordType>decodeURIComponent(options.recordType)
  }

  onShow() {
    this.initTags()
  }

  initTags() {
    this.tags = wx.getStorageSync(`tags-${this.recordType}`)
    this.setTags()
  }

  onStateClick(e: Event) {
    const {id} = e.currentTarget.dataset
    const tags = this.tags
    let currentTag: Tag
    tags.forEach(tag => {
      if (tag.id === +id) {
        tag.checked = +(!tag.checked)
        currentTag = tag
      }
    })
    wx.setStorageSync(`tags-${this.recordType}`, tags)
    EventBus.emit('updateTags',{tags})
    // @ts-ignore
    this.asyncPutTagChecked(currentTag)
    this.setTags()
  }

  onAddTagClick() {
    wx.navigateTo({
      url: `/pages/add-tag/add-tag?recordType=${this.recordType}`
    })
  }

  onCloseClick() {
    wx.navigateBack({delta: 1})
  }

  setTags() {
    const tags = clone(this.tags)
    tags.pop()
    this.setData({tags})
  }

  async asyncPutTagChecked(tag: Tag) {
    const {id, checked} = tag
    await this.http.request({
      url: `/tag/${id}/checked`,
      method: "PUT",
      data: JSON.stringify({checked})
    })
  }
})


