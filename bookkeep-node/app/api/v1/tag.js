const Router = require("koa-router")
const router = new Router({
  prefix:"/v1/tag"
})
const {Tag} = require("../../models/tag")

router.get("/", async (ctx) => {
  const tag = await Tag.getAll()
  ctx.body = tag
})

module.exports = router
