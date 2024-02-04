import { z } from 'zod'

const DeleteTaskSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: 'O id é obrigatorio',
      })
      .refine(
        value => !isNaN(Number(value)),
        'O id da tarefa deve ser um número',
      ),
  }),
})

export { DeleteTaskSchema }
