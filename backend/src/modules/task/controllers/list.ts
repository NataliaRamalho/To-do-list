import { Request, Response } from 'express'
import { makeListTasks } from '../factories/makeListTasks'

const ListTaskController = async (req: Request, res: Response) => {
  try {
    const factory = makeListTasks()

    const result = await factory.execute()
    res.status(200).send(result)
  } catch (err) {
    console.log(err)
  }
}

export { ListTaskController }
