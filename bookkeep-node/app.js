const Koa = require("koa")
const InitManager = require("./core/init")
const catchError = require("./middlewares/exception")

const app = new Koa()

app.use(catchError)
InitManager.initCode(app)

app.listen(4000)
