const { alfLength, engAlfLower, isUpperCase } = require("./common")

const reverseAlfLower = [...engAlfLower].reverse()

function atbash(message) {
  const result = []
  for (const sym of message) {
    const isUpper = isUpperCase(sym)
    const lowerSym = sym.toLowerCase()
    if (engAlfLower.includes(lowerSym)) {
      const index = engAlfLower.findIndex((el) => el === lowerSym)
      const elemInReverseAlf = reverseAlfLower[index]
      isUpper
        ? result.push(elemInReverseAlf.toUpperCase())
        : result.push(elemInReverseAlf)
    } else {
      result.push(sym)
    }
  }
  return result.join("")
}

module.exports = atbash
