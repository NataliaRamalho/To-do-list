import { Task } from '@prisma/client'

interface TaskRepository {
  list(): Promise<Task[]>
  create(title: string): Promise<Task>
  findById(id: number): Promise<Task | null>
  edit(id: number, title: string): Promise<Task>
}

export { TaskRepository }
