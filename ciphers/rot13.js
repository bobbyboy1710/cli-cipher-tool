const { convertWithShift } = require("./common/shiftFunc")

function rot(message, type) {
  return convertWithShift(message, type, 13)
}

module.exports = rot
