import { Router } from 'express'
import { ListTaskController } from './controllers/list'
import { CreateTaskController } from './controllers/create'
import { validate } from '@http/middleware/validate'
import { CreateTaskSchema } from './schema/create'

const taskRoutes = () => {
  const route = Router()

  route.get('/api/tasks', ListTaskController)
  route.post('/api/task', validate(CreateTaskSchema), CreateTaskController)

  return route
}

export { taskRoutes }
