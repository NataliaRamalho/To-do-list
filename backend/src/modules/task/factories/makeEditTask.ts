import { PrismaTaskRepository } from '@repositories/prisma/prismaTaskRepository'
import { EditTaskUseCase } from '../useCase/edit'

const makeEditTask = () => {
  const taskRepository = new PrismaTaskRepository()
  const factory = new EditTaskUseCase(taskRepository)

  return factory
}

export { makeEditTask }
