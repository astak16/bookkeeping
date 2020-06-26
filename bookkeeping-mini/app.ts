// app.ts
import {EventBus} from "./utils/util";

App<IAppOption>({
  globalData: {
    record: {
      tagId: 0,
      price: 0,
      type: "-",
      remark: "",
      year: 0,
      month: 0,
      date: 0
    }
  },
  onLaunch() {
    EventBus.getInstance()
  }
})
