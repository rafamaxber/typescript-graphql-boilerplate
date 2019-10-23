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
  path: '/graphql',
})
const httpServer = createServer(app)

httpServer.listen({ port: 3000 }, (): void =>
  console.log(
    `\n🚀      GraphQL is now running on http://localhost:3000/graphql`,
  ),
)
