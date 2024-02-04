import { z } from 'zod'

const CreateTaskSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'O titulo da tarefa é obrigatorio',
      invalid_type_error: 'O titulo da tarefa deve ser uma string',
    }),
  }),
})

type CreateTaskType = z.infer<typeof CreateTaskSchema>

export { CreateTaskSchema, CreateTaskType }
