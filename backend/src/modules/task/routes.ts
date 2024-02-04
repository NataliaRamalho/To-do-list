import { Router } from 'express'

import { validate } from '@http/middleware/validate'

import { ListTaskController } from './controllers/list'
import { CreateTaskController } from './controllers/create'
import { EditTaskController } from './controllers/edit'
import { DeleteTaskController } from './controllers/delete'

import { CreateTaskSchema } from './schema/create'
import { EditTaskSchema } from './schema/edit'
import { DeleteTaskSchema } from './schema/delete'

const taskRoutes = () => {
  const route = Router()

  route.get('/api/tasks', ListTaskController)
  route.post('/api/task', validate(CreateTaskSchema), CreateTaskController)
  route.put('/api/task/:id', validate(EditTaskSchema), EditTaskController)
  route.delete(
    '/api/task/:id',
    validate(DeleteTaskSchema),
    DeleteTaskController,
  )

  return route
}

export { taskRoutes }
