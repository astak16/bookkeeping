import {BaseComponent} from "../../utils/BaseComponent";
import DataOption = WechatMiniprogram.Component.DataOption;
import PropertyOption = WechatMiniprogram.Component.PropertyOption;
import {EventBus} from "../../utils/util";
import {record_type, RecordType} from "../../model";
import {HTTP} from "../../utils/http-p";
// import {record_type} from "../tabs";

Component(new class Tag extends BaseComponent {
  data: DataOption = {
    tags: [],
    // indicatorsCount: 1,
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
      const tags = await _this.asyncGetTags(encodeURIComponent(recordType))
      _this.setData({tags},()=>{
        EventBus.emit("recordTag", {tag: tags[0]})
      })
    },
    onIconClick(e:any){
      const {name,id,color} = e.detail
      EventBus.emit("recordTag", {tag: {name,id,color}})
    },
    async asyncGetTags(type: RecordType) {
      const http = new HTTP()
      return await http.request({url: `/tag?type=${type}`, data: {}, method: "GET"})
    }
  }
})
