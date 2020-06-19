const Router = require("koa-router")
const router = new Router({
  prefix: "/v1/tag"
})
const {Tag} = require("../../models/tag")

const {TagValidator} = require("../../validator/validator")

router.get("/", async (ctx) => {
  const v = await new TagValidator().validate(ctx)
  console.log(v.get("query.type"));
  const tag = await Tag.getAll(v.get("query.type"))
  ctx.body = tag
})

module.exports = router
