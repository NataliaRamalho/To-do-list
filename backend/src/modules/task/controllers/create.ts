import { Response } from 'express'
import { makeCreateTask } from '../factories/makeCreateTask'
import { CreateTaskType } from '../schema/create'

const CreateTaskController = async (req: CreateTaskType, res: Response) => {
  try {
    const factory = makeCreateTask()
    const newTask = await factory.execute(req.body)
    res.status(201).send(newTask)
  } catch (err) {
    console.log(err)
  }
}

export { CreateTaskController }
