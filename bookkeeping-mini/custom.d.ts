type RecordType = "+" | '-'

type RecordItem = {
  tagId: number,
  type: string,
  price: number,
  remark: string,
  year: number,
  month: number,
  date: number
}

type Tag = {
  id: number,
  name: string,
  number: number,
  color: string,
  type: string,
  checked: number
}
