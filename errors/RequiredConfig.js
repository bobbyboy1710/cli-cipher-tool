const CustomError = require("./CustomError")

class RequiredConfig extends CustomError {
  constructor(message) {
    super(message)
  }
}

module.exports = RequiredConfig
