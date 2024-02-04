import { Response, Request } from 'express'
import { makeEditTask } from '../factories/makeEditTask'
import { handleError } from '@error/handleError'

const EditTaskController = async (req: Request, res: Response) => {
  try {
    const factory = makeEditTask()
    const task = await factory.execute({
      id: Number(req.params.id),
      title: req.body.title,
    })
    res.status(200).send(task)
  } catch (err) {
    handleError(res, err)
  }
}

export { EditTaskController }
