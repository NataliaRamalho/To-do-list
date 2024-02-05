'use client';

import { ActionButton } from '@/components/actionButton';
import { CheckboxComponent } from '@/components/ui/checkbox';
import { TaskType } from '@/types/task';
import React from 'react'

type TaskProps = {
  taskData: TaskType
  onDeleteTask: (id: number) => void
  onEditTask: (id: number) => void
  onCheckedTask: (id: number) => void
}

export function Task({taskData, onDeleteTask, onEditTask, onCheckedTask} : TaskProps){
  return (
    <div
      className="flex flex-row items-center gap-x-2 rounded-md bg-slate-50 p-2"
    >
      <div className="flex-none">
        <CheckboxComponent
          checked={taskData.isChecked}
          onClick={() => onCheckedTask(taskData.id)}
        />
      </div>
      <div
        className={
          taskData.isChecked
            ? 'flex-1 self-end overflow-auto text-gray-300 line-through'
            : 'flex-1 self-end overflow-auto'
        }
      >
        <p>{taskData.title}</p>
      </div>
      <div className="flex flex-none flex-row gap-2">
        <ActionButton
          variant="edit"
          disabled={taskData.isChecked}
          onClick={() => onEditTask(taskData.id)}
        />

        <ActionButton
          variant="delete"
          onClick={() => onDeleteTask(taskData.id)}
          disabled={taskData.isChecked}
        />
      </div>
    </div>
  )
}
