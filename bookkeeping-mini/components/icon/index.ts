import {BaseComponent} from "../../utils/BaseComponent";

Component(new class Icon extends BaseComponent {
  imgSrc = ''
  data = {
    // textMargin: 'bottom'
  }
  externalClasses = ['u-class']
  properties = {
    type: {
      type: String,
      value: "type"
    },
    iconId: {
      type: Number,
      optionalTypes: [String],
      value: 0,
      observer(id: number | string) {
        if (!id) return
        const imgSrc = `/images/icons/type-${id}.png`
        ;(this as any).setData({imgSrc})
      }
    },
    name: {
      type: String,
      observer(name: string) {
        const _this = this as any
        if (name)
          _this.setData({mt: true})
      }
    },
    color: String,
    placement: {
      type: String,
      value: "",
      observer(placement: string) {
        if (placement === 'right' || placement === 'bottom' || placement === 'top' || placement === 'left') {
          const _this = this as any
          _this.setData({placement})
        } else {
          throw Error("placement is not found")
        }
      }
    },
    width: {
      type: String,
      value: '80'
    },
    tag: Object,
  }

  methods = {
    onIconClick() {
      const _this = this as any
      const {name, iconId, color, tag} = _this.data
      _this.triggerEvent("utap", {name, id: iconId, color, tag})
    }
  }
})
