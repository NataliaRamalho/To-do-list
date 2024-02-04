import { TaskRepository } from '@repositories/interfaces/taskRepository'

import { NotFoundError } from '@error/notFoundError'

type paramsType = {
  id: number
}

export class EditCheckTaskUseCase {
  constructor(private task: TaskRepository) {
    this.task = task
  }

  async execute({ id }: paramsType) {
    const taskFound = await this.task.findById(id)
    if (!taskFound) {
      throw new NotFoundError(
        'Tarefa não encontrada. Por favor valide o id informado',
      )
    }

    const task = await this.task.editCheck(id, !taskFound.isChecked)
    return task
  }
}
