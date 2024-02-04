import { Task } from '@prisma/client'

interface TaskRepository {
  list(): Promise<Task[]>
}

export { TaskRepository }
