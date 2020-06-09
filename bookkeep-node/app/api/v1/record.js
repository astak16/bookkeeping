const Router = require("koa-router")
const router = new Router({
  prefix: "/v1/record"
})
const {Record} = require("../../models/record")
const {success} = require("../../lib/helper")

router.post("/", async (ctx) => {
  const {price, remark, tagId} = ctx.request.body
  await Record.addRecord({price, remark, tagId})
  success()
})

module.exports = router
