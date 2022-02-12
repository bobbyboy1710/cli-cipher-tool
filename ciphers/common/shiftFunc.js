const { alfLength, engAlfLower, isUpperCase } = require("./index")

function convertWithShift(message, mode = 1, shift = 1) {
  const result = []
  for (const sym of message.split("")) {
    const isUpper = isUpperCase(sym)
    const lowerSym = sym.toLowerCase()
    if (engAlfLower.includes(lowerSym)) {
      const indexSym = engAlfLower.findIndex((el) => el === lowerSym)
      let shiftIndex =
        mode === 1
          ? (indexSym + shift) % alfLength
          : (indexSym - shift + alfLength) % alfLength
      isUpper
        ? result.push(engAlfLower[shiftIndex].toUpperCase())
        : result.push(engAlfLower[shiftIndex])
    } else {
      result.push(sym)
    }
  }
  return result.join("")
}

module.exports = {
  convertWithShift,
}
