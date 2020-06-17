// app.ts
import {EventBus} from "./utils/util";

App<IAppOption>({
  globalData: {},
  onLaunch() {
    EventBus.getInstance()
  }
})
