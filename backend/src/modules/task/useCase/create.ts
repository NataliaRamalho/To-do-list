import { TaskRepository } from '@repositories/interfaces/taskRepository'

type paramsType = {
  title: string
}

export class CreateTaskUseCase {
  constructor(private task: TaskRepository) {
    this.task = task
  }

  async execute({ title }: paramsType) {
    const task = await this.task.create(title)
    return task
  }
}
