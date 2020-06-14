import {BasePage} from "../../utils/BasePage";

Page(new class Index extends BasePage {
  public data = {
    aa: '113'
  };


  onLoad() {
    // this.setData({aa:""})
    // console.log(1)
    // wx.request({
    //   url: "http://localhost:4000/v1/record",
    //   method: "POST",
    //   data: {
    //     remark: '1',
    //     price: "12.00",
    //     tagId: '1'
    //   }
    // })

  }
  onClick(){
    console.log('page Click')
  }
})


