import {BaseComponent} from "../../utils/BaseComponent";

Component(new class Tag extends BaseComponent {
  data = {
    tags: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    indicatorsCount: 1,
    tagGroup: [],

    tagCount: 24
  }

  properties = {}

  attached() {
    const _this = this as any
    _this.setTagCount()
    _this.getTags()
    _this.calcIndicatorsCount()
    _this.getTagsGroup()
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
      _this.setData({iconId: 1, name: "早餐"})
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
  }
})
