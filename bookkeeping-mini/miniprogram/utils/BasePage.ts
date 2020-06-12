interface BasePage extends WechatMiniprogram.Page.InstanceMethods<WechatMiniprogram.Page.DataOption> {

}

class BasePage implements WechatMiniprogram.Page.Options<WechatMiniprogram.Page.DataOption,
    WechatMiniprogram.Page.CustomOption> {
  constructor() {
    console.log('11')
    //低版本微信中，子类继承父类时，由于 constructor 是只读的，无法赋值，导致报错
    // Object.defineProperty(this, 'constructor', {value: undefined})
  }
  onLoad(){
    console.log(22)
  }
}

export {
  BasePage
}
