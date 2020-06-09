const {Sequelize} = require("sequelize")
const {
  user,
  dbName,
  password,
  host,
  port
} = require("../config/config").database

const sequelize = new Sequelize(dbName, user, password, {
  dialect: "select",
  host,
  port,
  logging: true,
  timezone: "+08:00",

})

sequelize.sync({
  force: true
})
module.exports = {
  sequelize
}
