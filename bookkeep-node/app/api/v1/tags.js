const Router = require("koa-router")
const router = new Router()

router.get("/",()=>{
  console.log(1)
})

module.exports = router
