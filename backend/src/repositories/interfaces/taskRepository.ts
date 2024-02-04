import { Task } from '@prisma/client'

interface TaskRepository {
  list(): Promise<Task[]>
  create(title: string): Promise<Task>
  findById(id: number): Promise<Task | null>
  edit(id: number, title: string): Promise<Task>
  delete(id: number): Promise<Task>
  editCheck(id: number, isChecked: boolean): Promise<Task>
}

export { TaskRepository }
