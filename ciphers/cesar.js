const { convertWithShift } = require("./common/shiftFunc")

function cesar(message, type) {
  return convertWithShift(message, type)
}

module.exports = cesar
