const {LinValidator, Rule} = require("../../core/lin-validator")

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super();
    this.id = [
      new Rule("isInt", '需要是正整数', {min: 1})
    ]
  }
}

class RecordValidator extends LinValidator{
  constructor() {
    super();
    // this.price = [
    //   new Rule("isInt", '需要是正整数')
    // ]
  }
}

class TagValidator extends LinValidator{
  constructor() {
    super();
    // this.type
  }
}

module.exports = {
  PositiveIntegerValidator,
  RecordValidator,
  TagValidator
}
