import express, { Express } from 'express'
import cors from 'cors'
import { taskRoutes } from '@modules/task/routes'

const app: Express = express()

app.use(cors())

app.use(express.json())

app.use(taskRoutes())

export { app }
