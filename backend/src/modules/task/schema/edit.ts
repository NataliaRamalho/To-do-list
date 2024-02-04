import { z } from 'zod'

const EditTaskSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'O titulo da tarefa é obrigatorio',
      invalid_type_error: 'O titulo da tarefa deve ser uma string',
    }),
  }),
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

export { EditTaskSchema }
