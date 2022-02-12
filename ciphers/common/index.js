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

module.exports = {
  engAlfLower,
  alfLength,
  isUpperCase,
}
