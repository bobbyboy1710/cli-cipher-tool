const DuplicatedError = require("../errors/DuplicatedParam")
const IncorrectConfigParam = require("../errors/IncorrectConfigParam")
const RequiredConfig = require("../errors/RequiredConfig")

const flags = {
  i: "input",
  c: "config",
  o: "output",
}

const availableCiphers = ["C", "R", "A"]

const availableModes = [0, 1]

function getArgs() {
  const result = {}
  const myArgs = process.argv.slice(2)
  for (let i = 0; i < myArgs.length; i += 2) {
    const arg = myArgs[i]
    const nextIndex = i + 1
    const argValue = myArgs[nextIndex]
    const param = arg.match(/(?:-|--)(\w)/)[1] //i, c , o
    if (!flags.hasOwnProperty(param)) {
      throw new IncorrectConfigParam(`${arg} is inccorect parameter`)
    }
    const value = flags[param]
    if (result[value]) {
      throw new DuplicatedError(
        "You entered the same parameter twice, please enter once"
      )
    }
    result[value] = argValue
  }
  if (!result.config) {
    throw new RequiredConfig("The option config is required, please add it!")
  }
  result.config = parseConfig(result.config)
  return result
}

function parseConfig(config) {
  const result = []
  const myArg = config.split("-").forEach((el) => {
    const type = el[0]
    const mode = el[1] ? parseInt(el[1]) : null
    if (availableCiphers.includes(type)) {
      if (type === "A") {
        result.push({ type })
      } else if (availableModes.includes(mode)) {
        result.push({ type, mode })
      } else {
        throw new IncorrectConfigParam(
          "You enter the invalid value in config option, please re-enter!"
        )
      }
    } else {
      throw new IncorrectConfigParam(
        "You enter the invalid value in config option, please re-enter!"
      )
    }
  })
  return result
}

module.exports = getArgs
