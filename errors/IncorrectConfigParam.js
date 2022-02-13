const CustomError = require("./CustomError")

class IncorrectConfigParam extends CustomError {
  constructor(message) {
    super(message)
  }
}

module.exports = IncorrectConfigParam
