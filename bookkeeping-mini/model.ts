export type RecordType = "+" | '-'

export const record_type = Object.freeze({
  add: "+",
  pay: "-"
})

export type Tag = {
  id: number,
  name: string,
  number: number,
  color: string,
  type: string,
  checked: number
}

export const defaulTag = Object.freeze({
  id: 'add',
  name: "添加",
  checked: 1
})
