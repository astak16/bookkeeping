import {BasePage} from "../../utils/BasePage";

Page(new class Edit extends BasePage {
  onCalendarClick() {
    this.setData({show: true,date: ''})
  }
})
