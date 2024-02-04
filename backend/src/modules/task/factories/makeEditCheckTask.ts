import { PrismaTaskRepository } from '@repositories/prisma/prismaTaskRepository'
import { EditCheckTaskUseCase } from '../useCase/editCheck'

const makeEditCheckTask = () => {
  const taskRepository = new PrismaTaskRepository()
  const factory = new EditCheckTaskUseCase(taskRepository)

  return factory
}

export { makeEditCheckTask }
