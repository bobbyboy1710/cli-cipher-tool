const parseConfig = require("./parser/parser")
const { createPipeline } = require("./streams/pipeline")

const start = async () => {
  try {
    const { config, input, output } = parseConfig()
    await createPipeline(input, output, config)
  } catch (err) {
    process.stderr.write(err.message)
    process.exit(1)
  }
}

start()
