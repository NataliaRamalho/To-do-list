import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodError } from 'zod'

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })

      next()
    } catch (error) {
      if (error instanceof ZodError && error.issues.length > 0) {
        return res.status(422).json({ message: error.issues[0].message })
      }
      return res
        .status(422)
        .json({ message: 'Valide às propriedades passadas' })
    }
  }

export { validate }
