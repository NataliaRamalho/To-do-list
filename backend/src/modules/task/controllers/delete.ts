import { Response, Request } from 'express'

import { handleError } from '@error/handleError'

import { makeDeleteTask } from '../factories/makeDeleteTask'

const DeleteTaskController = async (req: Request, res: Response) => {
  try {
    const factory = makeDeleteTask()
    const task = await factory.execute({
      id: Number(req.params.id),
    })
    res.status(200).send(task)
  } catch (err) {
    handleError(res, err)
  }
}

export { DeleteTaskController }
