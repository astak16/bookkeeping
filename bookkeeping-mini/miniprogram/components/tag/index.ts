import {BaseComponent} from "../../utils/BaseComponent";

Component(new class Tag extends BaseComponent {
  attached() {

    (this as any).aa()
  }

  methods = {
    aa() {
      (this as any).setData({a:'tt',b:'18岁'})
    },
    onClick(){
      (this as any).setData({a:'tt1',b:'19岁'})
    }
  }
})
