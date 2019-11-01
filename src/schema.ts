import 'graphql-import-node'

import path from 'path'
import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema, IResolvers } from 'graphql-tools'
import { mergeResolvers, fileLoader } from 'merge-graphql-schemas'

import * as typeDefs from './schema/schema.graphql'

export function generateResolvers(): IResolvers {
  const resolversPath =
    process.env.NOVE_ENV === 'production'
      ? '/**/resolvers/*.js'
      : '/**/resolvers/*.ts'
  const resolverList: IResolvers[] = fileLoader(
    path.join(__dirname, resolversPath),
  )

  return mergeResolvers(resolverList)
}

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers: generateResolvers(),
})

export default schema
