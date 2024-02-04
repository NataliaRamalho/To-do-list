import { PrismaTaskRepository } from '@repositories/prisma/prismaTaskRepository'
import { ListTasksUseCase } from '../useCase/list'

const makeListTasks = () => {
  const taskRepository = new PrismaTaskRepository()
  const factory = new ListTasksUseCase(taskRepository)

  return factory
}

export { makeListTasks }
