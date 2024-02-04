import { Response } from 'express'

import { NotFoundError } from './notFoundError'

const handleError = (response: Response, error: unknown) => {
  let message = 'Não foi possivel realizar a ação'

  if (process.env.ENVIRONMENT_MODE === 'development') {
    console.log(error)
  }

  if (error instanceof NotFoundError) {
    return response.status(404).json({ message: error.message })
  }
  if (error instanceof Error && error.message) {
    message = error.message
  }

  return response.status(400).json({ message })
}

export { handleError }
