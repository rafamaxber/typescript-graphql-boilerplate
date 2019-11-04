import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env'

const envFound = dotenv.config({ path: envFile })

if (envFound.error) {
  console.log("Couldn't find .env file \n\n")
}

interface Config {
  graphQlPath: string
  port: string | number
  logs: {
    level: string
  },
  oauthUrl: string
}

function config(): Config {
  const { PORT, GRAPHQL_PATH, LOG_LEVEL, OAUTH_URL } = process.env

  return {
    oauthUrl: OAUTH_URL,
    port: PORT || 3000,
    graphQlPath: GRAPHQL_PATH || '/graphql',
    logs: {
      level: LOG_LEVEL || 'silly',
    },
  }
}

export default config()
