const {Sequelize} = require("sequelize")
const {
  user,
  dbName,
  password,
  host,
  port
} = require("../config/config").database

const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  logging: true,
  timezone: "+08:00",
  define: {
    paranoid: false,
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    underscored: true
  }
})

sequelize.sync({
  force: false
})
module.exports = {
  sequelize
}
