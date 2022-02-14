const { convertWithShift } = require("./common/shiftFunc")

const SHIFT_COUNT = 8

function rot(message, type) {
  return convertWithShift(message, type, SHIFT_COUNT)
}

module.exports = rot
