// interface BaseComponent extends WechatMiniprogram.Component.InstanceMethods<WechatMiniprogram.Component.DataOption> {

// }
// interface BaseComponent extends WechatMiniprogram.Component.Property<WechatMiniprogram.Component.PropertyOption>{
//
// }
// interface BaseComponent extends WechatMiniprogram.Component.OtherOption{
//
// }
// interface BaseComponent extends WechatMiniprogram.Component.Method<WechatMiniprogram.Component.MethodOption>{
//
// }

type AAA =
    Partial<WechatMiniprogram.Component.InstanceMethods<WechatMiniprogram.Component.DataOption>>&
    Partial<WechatMiniprogram.Component.Property<WechatMiniprogram.Component.PropertyOption>>&
    Partial<WechatMiniprogram.Component.OtherOption>&
    Partial<WechatMiniprogram.Component.Method<WechatMiniprogram.Component.MethodOption>>


interface BaseComponent extends AAA{

}
class BaseComponent implements WechatMiniprogram.Component.Options<
    WechatMiniprogram.Component.DataOption,
    WechatMiniprogram.Component.PropertyOption,
    WechatMiniprogram.Component.MethodOption> {

}

export {
  BaseComponent
}

