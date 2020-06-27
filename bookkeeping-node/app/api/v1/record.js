const Router = require("koa-router")
const router = new Router({
  prefix: "/v1/record"
})
const {Record} = require("../../models/record")
const {success} = require("../../lib/helper")
const {RecordValidator, PositiveIntegerValidator} = require("../../validator/validator")

router.get('/', async (ctx) => {
  const records = await Record.getAll()
  ctx.body = records
})

router.post("/", async (ctx) => {
  const v = await new RecordValidator().validate(ctx, {id: "tagId"})
  const tagId = v.get("body.tagId")
  const price = v.get("body.price")
  const remark = v.get("body.remark")
  const type = v.get("body.type")
  const year = v.get("body.year")
  const month = v.get("body.month")
  const date = v.get("body.date")
  await Record.addRecord({price, remark, tagId, type, year, month, date})
  success()
})


module.exports = router
