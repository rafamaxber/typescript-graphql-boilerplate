/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const { fileLoader, mergeTypes } = require('merge-graphql-schemas')
const { writeFileSync } = require('fs')
const { join } = require('path')

const sourcePath = join(__dirname, '../', '/src/modules/**/*.graphql')
const destPath = join(__dirname, '../', '/src/schema/schema.graphql')

function withMessage(value) {
  const message = '## AUTOMATICALLY GENERATED DO NOT MANUALLY UPDATE ## \n\n'

  return message.concat(value)
}

const typeDefs = withMessage(
  mergeTypes(fileLoader(sourcePath), {
    all: true,
  }),
)

writeFileSync(destPath, typeDefs)
