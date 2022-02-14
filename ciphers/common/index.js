const engAlfLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

const alfLength = engAlfLower.length

const isUpperCase = (sym) => sym === sym.toUpperCase()

const ATBASH_CIPHER_SIGN = "A"
const CESAR_CIPHER_SIGN = "C"
const ROT_CIPHER_SIGN = "R"

module.exports = {
  engAlfLower,
  alfLength,
  isUpperCase,
  ATBASH_CIPHER_SIGN,
  CESAR_CIPHER_SIGN,
  ROT_CIPHER_SIGN,
}
