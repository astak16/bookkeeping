const {sequelize} = require("../../core/db")
const {Sequelize, Model, Op} = require("sequelize")

class Tag extends Model {
  static async getAll(type, name) {
    const tags = await Tag.findAll({
      where: {
        type,
        name: name ? {[Op.not]: null} : null
      }
    })
    return tags
  }

  static async putName(id, name) {
    const tag = await Tag.findOne({
      where: {id}
    })
    await tag.update({
      name
    })
  }

  static async putChecked(id,checked){
    const tag = await Tag.findOne({
      where: {id}
    })
    await tag.update({
      checked
    })
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
  checked: Sequelize.INTEGER,
  customize:Sequelize.STRING
}, {
  sequelize,
  tableName: "tag"
})

module.exports = {
  Tag
}
