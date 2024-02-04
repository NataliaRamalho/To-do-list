import { TaskRepository } from '@repositories/interfaces/taskRepository'

import { NotFoundError } from '@error/notFoundError'

type paramsType = {
  id: number
  isChecked: boolean
}

export class EditCheckTaskUseCase {
  constructor(private task: TaskRepository) {
    this.task = task
  }

  async execute({ id, isChecked }: paramsType) {
    const doesTaskExists = await this.task.findById(id)
    if (!doesTaskExists) {
      throw new NotFoundError(
        'Tarefa não encontrada. Por favor valide o id informado',
      )
    }

    const task = await this.task.editCheck(id, isChecked)
    return task
  }
}
