import {BasePage} from "../../utils/BasePage";

Page(new class Bill extends BasePage {
  tagsHeight!: number

  onLoad() {
    // super.onLoad();
    // const _this = this as any
    // const eventChannel = _this.getOpenerEventChannel()
    //
    // const eventChannel = _this.getOpenerEventChannel()
    // eventChannel.emit('price', {a: 1})
    //
    // eventChannel.on('price', (data: any) => {
    //   console.log(data.price)
    // })
  }

  onShow() {
// console.log('adaa')
  }

  onReady() {
    // this.getTagsHeight()
    // console.log(333333)
  }

})
