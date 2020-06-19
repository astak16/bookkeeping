const {sequelize} = require("../../core/db")
const {Sequelize, Model, Op} = require("sequelize")

class Tag extends Model {
  static async getAll(type) {
    console.log(type,11213213233132)
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
  type: Sequelize.STRING
}, {
  sequelize,
  tableName: "tag"
})

module.exports = {
  Tag
}
