import { Router } from 'express'

import { validate } from '@http/middleware/validate'

import { ListTaskController } from './controllers/list'
import { CreateTaskController } from './controllers/create'
import { EditTaskController } from './controllers/edit'

import { CreateTaskSchema } from './schema/create'
import { EditTaskSchema } from './schema/edit'

const taskRoutes = () => {
  const route = Router()

  route.get('/api/tasks', ListTaskController)
  route.post('/api/task', validate(CreateTaskSchema), CreateTaskController)
  route.put('/api/task/:id', validate(EditTaskSchema), EditTaskController)

  return route
}

export { taskRoutes }
