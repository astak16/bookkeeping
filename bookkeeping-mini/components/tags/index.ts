import {BaseComponent} from "../../utils/BaseComponent";
import DataOption = WechatMiniprogram.Component.DataOption;
import PropertyOption = WechatMiniprogram.Component.PropertyOption;
import {EventBus} from "../../utils/util";
import {record_type} from "../../model";
// import {record_type} from "../tabs";

Component(new class Tag extends BaseComponent {
  data: DataOption = {
    tags: [],
    indicatorsCount: 1,
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
      _this.setData({recordType: data.type}, () => {
        _this.getTags()
      })
    })
  }


  methods = {
    setTagCount() {
      const _this = this as any
      const system = wx.getSystemInfoSync()
      if (system.windowHeight < 680)
        _this.data.tagCount = 12
    },
    getTags() {
      const _this = this as any
      _this.toggleTags()
      _this.calcIndicatorsCount()
      _this.getTagsGroup()
    },
    calcIndicatorsCount() {
      const _this = this as any
      const total = _this.data.tags.length
      const count = Math.ceil(total / _this.data.tagCount)
      _this.setData({indicatorsCount: count})
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
    toggleTags() {
      const _this = this as any
      const {recordType} = _this.data
      const tags: any[] = []

      if (recordType === record_type.pay) {
        for (let i = 1; i <= 32; i++) {
          tags.push({iconId: 1, name: "早餐"})
        }
      } else if (recordType === record_type.add) {
        for (let i = 1; i <= 32; i++) {
          tags.push({iconId: 2, name: "工资"})
        }
      }
      _this.setData({tags})
      console.log(tags[0].name)
      EventBus.emit("recordTag", {tag: tags[0]})

    }
  }
})
