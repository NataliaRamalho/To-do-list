import { Router } from 'express'
import { ListTaskController } from './controllers/list'

const taskRoutes = () => {
  const route = Router()
  route.get('/api/tasks', ListTaskController)
  return route
}

export { taskRoutes }
