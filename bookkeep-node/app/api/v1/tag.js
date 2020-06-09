const Router = require("koa-router")
const router = new Router()
const {Tag} = require("../../models/tag")

router.get("/", async () => {
  const tag = await Tag.getAll()
  console.log(tag)
})

module.exports = router
