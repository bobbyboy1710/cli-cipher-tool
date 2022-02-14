const { pipeline } = require("stream/promises")
const MyReadable = require("./MyReadable")
const MyWritable = require("./MyWritable")
const { buildPipeTransform } = require("./transformBuilder")

async function createPipeline(input, output, ciphers) {
  const inputStream = input ? new MyReadable(input) : process.stdin
  const outputStream = output ? new MyWritable(output) : process.stdout
  const transformPipe = buildPipeTransform(ciphers)
  return pipeline(inputStream, ...transformPipe, outputStream)
}

module.exports = {
  createPipeline,
}
