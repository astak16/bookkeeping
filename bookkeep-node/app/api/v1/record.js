const Router = require("koa-router")
const router = new Router({
  prefix: "/v1/record"
})
const {Record} = require("../../models/record")
const {success} = require("../../lib/helper")
const {RecordValidator,PositiveIntegerValidator} = require("../../validator/validator")

router.post("/", async (ctx) => {
  const v = await new RecordValidator().validate(ctx,{id:"tagId"})
  const tagId = v.get("body.tagId")
  const price = v.get("body.price")
  const remark = v.get("body.remark")
  await Record.addRecord({price, remark, tagId})
  success()
})

module.exports = router
