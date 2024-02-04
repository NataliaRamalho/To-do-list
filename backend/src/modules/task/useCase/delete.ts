import { NotFoundError } from '@error/notFoundError'

import { TaskRepository } from '@repositories/interfaces/taskRepository'

type paramsType = {
  id: number
}

export class DeleteTaskUseCase {
  constructor(private task: TaskRepository) {
    this.task = task
  }

  async execute({ id }: paramsType) {
    const doesTaskExists = await this.task.findById(id)
    if (!doesTaskExists) {
      throw new NotFoundError(
        'Tarefa não encontrada. Por favor valide o id informado',
      )
    }

    const task = await this.task.delete(id)
    return task
  }
}
