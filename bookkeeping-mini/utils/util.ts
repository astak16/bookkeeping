export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('-') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

export const zeroPrice = (price: string) => {
  let item = price
  if (price.indexOf('.') > -1) {
    const [, split] = price.split('.')
    if (split.length === 0) {
      item = price + '00'
    } else if (split.length === 1) {
      item = price + '0'
    }
  } else {
    item = price + '.00'
  }
  return item
}

export class EventBus {
  private static bus: { [key: string]: <T>(param: T) => void } = {}
  private static instance: EventBus

  static getInstance() {
    if (!EventBus.instance) {
      return EventBus.instance = new EventBus()
    }
    return EventBus.instance
  }

  // on 订阅
  static on(eventName: string, fn: <T>(param: T) => void) {
    if (typeof fn !== 'function')
      new Error('fn is not a function');

    this.bus[eventName] = fn
  }

  // emit 发布
  static emit<T>(eventName: string, param: T) {
    let fn = this.bus[eventName];
    if (!fn) return;
    fn.call(this, param)
  }

  // off 释放
  static off(eventName: string) {
    delete this.bus[eventName]
  }
}
