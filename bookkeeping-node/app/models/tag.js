const {sequelize} = require("../../core/db")
const {Sequelize, Model} = require("sequelize")

class Tag extends Model {
  static async getAll() {
    const tags = await Tag.findAll()
    return tags
  }
}

Tag.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  number: Sequelize.INTEGER,
}, {
  sequelize,
  tableName: "tag"
})

module.exports = {
  Tag
}
