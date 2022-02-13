const CustomError = require("./CustomError")

class DuplicatedError extends CustomError {
  constructor(message) {
    super(message)
  }
}

module.exports = DuplicatedError
