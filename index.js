"use strict"

//node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

const flags = {
  i: "input",
  c: "config",
  o: "output",
}

const ciphers = ["C", "R", "A"]

const modes = [0, 1]

function getArgs() {
  const result = {}
  const myArgs = process.argv.slice(2)
  // const correctArgs = ["-i", "--input", "-c", "--config", "-o", "--output"]
  console.log(myArgs)
  for (let i = 0; i < myArgs.length; i += 2) {
    const arg = myArgs[i]
    const nextValue = i + 1
    const argValue = myArgs[nextValue]
    const param = arg.match(/(?:-|--)(\w)/)[1] //i, c , o
    if (!flags.hasOwnProperty(param)) {
      //TODO: Add error
      console.log("Inccorect value")
    }
    const value = flags[param]
    if (result[value]) {
      //TODO: Add error
      console.log("You enter the same key twice")
      continue //!Change
    }
    result[value] = argValue
  }
  if (!result.config) {
    //TODO: Doesnt exist property config
  }
  result.config = parseConfig(result.config)
  console.log(result.config)
  return result
}

console.log(getArgs())

function parseConfig(config) {
  const result = []
  const myArg = config.split("-").forEach((el) => {
    const type = el[0]
    const mode = parseInt(el[1])
    if (ciphers.includes(type) && modes.includes(mode)) {
      result.push({ type, mode })
    } else {
      //TODO: Throw error inccorect input
    }
  })
  return result
}
