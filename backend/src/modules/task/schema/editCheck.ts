import { z } from 'zod'

const EditCheckedTaskSchema = z.object({
  body: z.object({
    isChecked: z.boolean({
      required_error: 'O parâmetro isChecked é obrigatorio',
      invalid_type_error: 'O parâmetro isChecked deve ser boleano',
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

export { EditCheckedTaskSchema }
