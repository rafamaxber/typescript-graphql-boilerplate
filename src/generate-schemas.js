/* eslint-disable @typescript-eslint/no-var-requires */
const { fileLoader, mergeTypes } = require('merge-graphql-schemas')
const { writeFileSync } = require('fs')
const { join } = require('path')

const sourcePath = join(__dirname, 'modules/**/*.graphql')
const distPath = join(__dirname, 'schema/schema.graphql')

const typeDefs = mergeTypes(fileLoader(sourcePath), {
  all: true,
})

writeFileSync(distPath, typeDefs)
