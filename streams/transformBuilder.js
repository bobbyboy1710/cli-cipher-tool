const { Transform } = require("stream")
const { atbash, cesar, rot } = require("../ciphers")
const { ATBASH_CIPHER_SIGN, CESAR_CIPHER_SIGN } = require("./../ciphers/common")

function transofrmCreator(cb, mode) {
  return new Transform({
    transform(chunk, enc, next) {
      chunk = chunk.toString().trim()
      const isModed = isFinite(mode)
      const encryptedData = isModed ? cb(chunk, mode) : cb(chunk)
      next(null, encryptedData)
    },
  })
}

function buildPipeTransform(ciphers) {
  const result = []
  for (let { mode, type } of ciphers) {
    let transformStream
    if (type === ATBASH_CIPHER_SIGN) {
      transformStream = transofrmCreator(atbash)
    } else if (type === CESAR_CIPHER_SIGN) {
      transformStream = transofrmCreator(cesar, mode)
    } else {
      transformStream = transofrmCreator(rot, mode)
    }
    result.push(transformStream)
  }
  return result
}

module.exports = {
  buildPipeTransform,
}
