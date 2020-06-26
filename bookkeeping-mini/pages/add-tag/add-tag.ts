import {BasePage} from "../../utils/BasePage";
import {defaluTag} from "../../model";

Page(new class AddTag extends BasePage {
  recordType!: RecordType
  data = {
    tags: [],
    tag: {},
    value: ''
  }

  async onLoad(options: any) {
    super.onLoad(options)
    this.recordType = <RecordType>decodeURIComponent(options.recordType)
    const tags = await this.asyncGetTags()
    this.setData({tags, tag: tags[0]})
  }

  onInput(e: any) {
    let {value} = e.detail
    const tag = <Tag>this.data.tag
    if (value.length > 4) {
      wx.showToast({title: '类别名称已到达限定长度', icon: 'none'})
      value = value.slice(0, 4)
    }
    tag.name = value
    this.setData({tag, value})
  }

  onCloseClick() {
    wx.navigateBack({delta: 1})
  }

  async onFinishClick(): Promise<any> {
    const tag = <Tag>this.data.tag
    if (!tag.name || tag.name.length === 0)
      return wx.showToast({title: "类别名称不能为空", icon: "none"})
    const tags = wx.getStorageSync(`tags-${this.recordType}`)
    tags.pop()
    tags.push(tag, defaluTag)
    wx.setStorageSync(`tags-${this.recordType}`, tags)
    await this.asyncPutTagName(tag)
    this.onCloseClick()
  }

  onIconClick(e: any) {
    const {tag} = e.detail
    this.setData({tag})
  }

  async asyncGetTags() {
    const tags: any = await this.http.request({url: `/tag?type=${this.recordType}`})
    return tags
  }

  async asyncPutTagName(tag: Tag) {
    const {id, name} = tag
    await this.http.request({
      url: `/tag/${id}/name`,
      method: "PUT",
      data: JSON.stringify({name})
    })
  }
})
