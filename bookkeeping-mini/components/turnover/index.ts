import {BaseComponent} from "../../utils/BaseComponent";

Component(new class Turnover extends BaseComponent {
  externalClasses = ['u-class']
  properties = {
    tag: Object,
    record: {
      type: Object,
      // observer(record: any) {}
    }
  }

})
