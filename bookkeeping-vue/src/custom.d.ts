type ImgKey = 'add' | "mark" | number

type Tag = { id: number; name: string; number: number }

type RecordItem = {
  tag: Tag;
  remark: string;
  type: string;
  amount: string;
}

interface Extendable {
  [key: string]: any;
}

// interface Vue {
//   EventBus: Vue
// }
