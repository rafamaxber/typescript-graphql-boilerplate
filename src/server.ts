import config from './config'

import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import { createServer } from 'http'
import schema from './schema'
import app from './config/express-config'

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
})

server.applyMiddleware({
  app,
  path: config.graphQlPath,
})

const httpServer = createServer(app)

httpServer.listen({ port: config.port }, (): void =>
  console.log(
    `\n🚀      GraphQL is now running on http://localhost:${config.port}${config.graphQlPath}`,
  ),
)
