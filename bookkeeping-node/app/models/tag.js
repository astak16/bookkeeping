const {sequelize} = require("../../core/db")
const {Sequelize, Model, Op} = require("sequelize")

class Tag extends Model {
  static async getAll(type) {
    const tags = await Tag.findAll({
      where: {
        type,
        name: {
          [Op.not]: null
        }
      }
    })
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
  color: Sequelize.STRING,
  type: Sequelize.STRING,
  checked:Sequelize.INTEGER
}, {
  sequelize,
  tableName: "tag"
})

module.exports = {
  Tag
}
