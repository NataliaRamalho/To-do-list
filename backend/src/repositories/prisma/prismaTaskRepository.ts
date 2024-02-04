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
}
