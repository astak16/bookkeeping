const {sequelize} = require("../../core/db")
const {Sequelize, Model, Op} = require("sequelize")

const {Tag} = require("./tag")

class Record extends Model {
  static async getAll() {
    const records = await Record.findAll({
      order:[['date','DESC']]
    })
    let tagIds = [], dates = [], sums = []
    records.forEach(record => {
      tagIds.push(record.tagId)
      dates.push(record.date)
    })
    dates = new Set(dates)
    dates.forEach(async (date) => {
      const sum = await Record.sum('price', {
        where: {date}
      })
      sums.push(sum)
    })
    const tags = await sequelize.transaction(async t => {
      return await Tag.findAll({
        where: {
          id: {
            [Op.in]: tagIds
          }
        }
      }, {transaction: t})
    })

    const map = {}
    const dest = []
    records.forEach(record => {
      tags.forEach(tag => {
        if (record.tagId === tag.id)
          record.setDataValue('tag', tag)
      })
      if (!map[record.date]) {
        dest.push({
          date: record.date,
          records: [record]
        })
        map[record.date] = record
      } else {
        dest.forEach(it => {
          if (it.date === record.date)
            it.records.push(record)
        })
      }
    })
    dest.forEach((it, key) => it.price = sums[key])
    return dest
  }

  static async addRecord({remark, price, tagId, type, year, month, date}) {
    Record.create({remark, price, tagId, type, year, month, date})
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
  date: Sequelize.INTEGER
}, {
  sequelize,
  tableName: "record"
})

module.exports = {
  Record
}
