import {BaseComponent} from "../../utils/BaseComponent";
import DataOption = WechatMiniprogram.Component.DataOption;
import PropertyOption = WechatMiniprogram.Component.PropertyOption;
import {EventBus} from "../../utils/util";
import {defaluTag, record_type} from "../../model";
import {HTTP} from "../../utils/http-p";

const app = getApp()
Component(new class Tags extends BaseComponent {
  data: DataOption = {
    tags: [],
    tagGroup: [],

    recordType: record_type.pay,
    tagCount: 24
  }

  properties: PropertyOption = {}

  attached() {
    const _this = this as any
    _this.setTagCount()
    _this.getTags()
    EventBus.on('recordType', (data: any) => {
      _this.setData({recordType: data.type}, () => _this.getTags())
    })
    EventBus.on('updateTags', () => _this.getTags())
  }

  methods = {
    setTagCount() {
      const _this = this as any
      const system = wx.getSystemInfoSync()
      if (system.windowHeight < 680)
        _this.data.tagCount = 12
    },
    async getTags() {
      const _this = this as any
      await _this.toggleTags()
      _this.getTagsGroup()
    },

    getTagsGroup() {
      const _this = this as any
      const tagGroup: any[] = []
      const {tags, tagCount} = _this.data
      for (let i = 0, len = tags.length; i < len; i += tagCount) {
        tagGroup.push(tags.slice(i, i + tagCount))
      }
      _this.setData({tagGroup})
    },
    async toggleTags() {
      const _this = this as any
      const recordType: RecordType = _this.data.recordType
      let tags: Tag[] = wx.getStorageSync(`tags-${recordType}`)
      if (!tags) {
        tags = await _this.asyncGetTags(encodeURIComponent(recordType))
        wx.setStorageSync(`tags-${recordType}`, tags)
      }
      _this.setData({tags}, () => {
        app.globalData.record.tagId = tags[0].id
        EventBus.emit("recordTag", {tag: tags[0]})
      })
    },
    onIconClick(e: any) {
      const _this = this as any
      const {id, tag} = e.detail
      if (id === 'add') {
        const recordType: RecordType = _this.data.recordType
        wx.navigateTo({
          url: `/pages/edit-tag/edit-tag?recordType=${encodeURIComponent(recordType)}`
        })
      } else {
        app.globalData.record.tagId = id
        EventBus.emit("recordTag", {tag})
      }
    },
    async asyncGetTags(type: RecordType) {
      const http = new HTTP()
      const tags: any = await http.request({url: `/tag?type=${type}&name=1`})
      tags.push(defaluTag)
      return tags
    }
  }
})
