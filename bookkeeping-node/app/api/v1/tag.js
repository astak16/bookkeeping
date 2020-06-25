const Router = require("koa-router")
const router = new Router({
  prefix: "/v1/tag"
})
const {Tag} = require("../../models/tag")

const {TagValidator} = require("../../validator/validator")
const {success} = require("../../lib/helper")

router.get("/", async (ctx) => {
  const v = await new TagValidator().validate(ctx)
  const tag = await Tag.getAll(v.get("query.type"), v.get("query.name"))
  ctx.body = tag
})

router.put('/:id/name', async (ctx) => {
  const v = await new TagValidator().validate(ctx)
  await Tag.putName(v.get('path.id'), v.get('body.name'))
  success()
})

router.put('/:id/checked', async (ctx) => {
  const v = await new TagValidator().validate(ctx)
  await Tag.putChecked(v.get('path.id'), v.get('body.checked'))
  success()
})

module.exports = router
