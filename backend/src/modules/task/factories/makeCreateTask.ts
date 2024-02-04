import { PrismaTaskRepository } from '@repositories/prisma/prismaTaskRepository'
import { CreateTaskUseCase } from '../useCase/create'

const makeCreateTask = () => {
  const taskRepository = new PrismaTaskRepository()
  const factory = new CreateTaskUseCase(taskRepository)

  return factory
}

export { makeCreateTask }
