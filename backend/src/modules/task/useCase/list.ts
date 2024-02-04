import { TaskRepository } from '@repositories/interfaces/taskRepository'

export class ListTasksUseCase {
  constructor(private task: TaskRepository) {
    this.task = task
  }

  async execute() {
    const list = await this.task.list()
    return list
  }
}
