import { PrismaTaskRepository } from '@repositories/prisma/prismaTaskRepository'
import { DeleteTaskUseCase } from '../useCase/delete'

const makeDeleteTask = () => {
  const taskRepository = new PrismaTaskRepository()
  const factory = new DeleteTaskUseCase(taskRepository)

  return factory
}

export { makeDeleteTask }
