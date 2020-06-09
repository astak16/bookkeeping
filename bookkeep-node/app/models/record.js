const {sequelize} = require("../../core/db")
const {Sequelize, Model} = require("sequelize")

class Record extends Model {
  static async addRecord({remark, price, tagId}) {
    Record.create({remark, price, tagId})
  }
}

Record.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  remark: Sequelize.STRING,
  price: Sequelize.STRING,
  tagId: Sequelize.INTEGER
}, {
  sequelize,
  tableName: "record"
})

module.exports = {
  Record
}
