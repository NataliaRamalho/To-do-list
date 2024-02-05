'use client'

import { ActionButton } from '@/components/actionButton'
import { CheckboxComponent } from '@/components/ui/checkbox'
import { TaskType } from '@/types/task'
import React from 'react'
import { InputTaskTitle } from './inputTaskTitle'

type TaskProps = {
  taskData: TaskType
  onSaveTask: (taskId: number, title?: string) => void
}

export function EditTask({ taskData, onSaveTask }: TaskProps) {
  const [title, setTitle] = React.useState<string>()
  return (
    <div className="flex flex-row items-center gap-x-2 rounded-md bg-slate-50 p-2">
      <div className="flex flex-1 ">
        <InputTaskTitle
          placeholder="Digite a tarefa"
          onChange={(event) =>
            setTitle(event.target.value)
          }
        />
      </div>
      <div className="flex flex-none flex-row">
        <ActionButton
          variant="save"
          disabled={taskData.isChecked}
          onClick={() => onSaveTask(taskData.id, title)}
        />
      </div>
    </div>
  )
}
