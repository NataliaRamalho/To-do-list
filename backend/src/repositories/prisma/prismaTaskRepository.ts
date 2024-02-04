import { prisma } from '@lib/prisma'
import { TaskRepository } from '@repositories/interfaces/taskRepository'
export class PrismaTaskRepository implements TaskRepository {
  async list() {
    const tasks = await prisma.task.findMany()
    return tasks
  }

  async create(title: string) {
    const task = await prisma.task.create({
      data: {
        title,
      },
    })
    return task
  }

  async findById(id: number) {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    })
    return task
  }

  async edit(id: number, title: string) {
    const result = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        updatedAt: new Date(),
      },
    })
    return result
  }
}
