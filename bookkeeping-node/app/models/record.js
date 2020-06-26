const {sequelize} = require("../../core/db")
const {Sequelize, Model} = require("sequelize")

class Record extends Model {
  static async addRecord({remark, price, tagId, type, year, month,date}) {
    Record.create({remark, price, tagId, type, year, month,date})
  }
}

Record.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  remark: Sequelize.STRING,
  price: Sequelize.INTEGER,
  tagId: Sequelize.INTEGER,
  type: Sequelize.STRING,
  year: Sequelize.INTEGER,
  month: Sequelize.INTEGER,
  date:Sequelize.INTEGER
}, {
  sequelize,
  tableName: "record"
})

module.exports = {
  Record
}
