import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env'

const envFound = dotenv.config({ path: envFile })

if (envFound.error) {
  throw new Error("Couldn't find .env file \n\n")
}

interface Config {
  graphQlPath: string
  port: string | number
  logs: {
    level: string
  }
}

function config(): Config {
  return {
    port: process.env.PORT || 3000,
    graphQlPath: process.env.GRAPHQL_PATH || '/graphql',
    logs: {
      level: process.env.LOG_LEVEL || 'silly',
    },
  }
}

export default config()
