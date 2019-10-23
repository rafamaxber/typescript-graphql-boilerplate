import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

app.use(helmet())
app.use('*', cors())
app.disable('x-powered-by')
app.use(compression())

export default app
