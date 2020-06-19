const {LinValidator, Rule} = require("../../core/lin-validator")

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super();
    this.id = [
      new Rule("isInt", '需要是正整数', {min: 1})
    ]
  }
}

class RecordValidator extends PositiveIntegerValidator {
  constructor() {
    super();
    this.price = [
      new Rule("isLength", '价格设置的不对', {min: 3, max: 16})
    ]
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
