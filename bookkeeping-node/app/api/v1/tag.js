const Router = require("koa-router")
const router = new Router({
  prefix:"/v1/tag"
})
const {Tag} = require("../../models/tag")

router.get("/", async (ctx) => {
  const tag = await Tag.getAll()
  console.log(tag)
  ctx.body = tag
})

module.exports = router
