type Img = {
  add: string;
  mark: string;

  [key: string]: string;
}
const handleImg = (context: __WebpackModuleApi.RequireContext) => {
  const img: { [key: string]: string } = {}
  context.keys().forEach(k => {
    const kekReg = k.match(/-(.+)\./)
    const key = kekReg && kekReg[1]
    if (key) img[key] = context(k)
  })
  return img as Img
}

export default handleImg;
