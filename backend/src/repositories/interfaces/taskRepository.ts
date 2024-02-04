import { Task } from '@prisma/client'

interface TaskRepository {
  list(): Promise<Task[]>
  create(title: string): Promise<Task>
}

export { TaskRepository }
