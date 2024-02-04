import { Response, Request } from 'express'

import { handleError } from '@error/handleError'

import { makeEditCheckTask } from '../factories/makeEditCheckTask'

const EditCheckedTaskController = async (req: Request, res: Response) => {
  try {
    const factory = makeEditCheckTask()
    const task = await factory.execute({
      id: Number(req.params.id),
    })
    res.status(200).send(task)
  } catch (err) {
    handleError(res, err)
  }
}

export { EditCheckedTaskController }
