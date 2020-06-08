const requireDirectory = require("require-directory");
const Router = require("koa-router")

class InitManager {
  static initCode(app) {
    InitManager.app = app
    InitManager.loadConfig()
    InitManager.initLoadRouter()
  }

  static loadConfig(path = ""){
    const configPath = path || `${process.cwd()}/config/config.js`
    const config = require(configPath)
    global.config = config
  }

  static initLoadRouter() {
    const apiDirectory = `${process.cwd()}/app/api`;

    requireDirectory(module, apiDirectory, {visit: whenLoadModule})
    function whenLoadModule (obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }
}

module.exports = InitManager
