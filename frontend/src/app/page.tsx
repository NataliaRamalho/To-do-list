'use client'

import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'

import { FaPlus } from 'react-icons/fa'

import { ActionButton } from '@/components/actionButton'
import { CheckboxComponent } from '@/components/ui/checkbox'

import { Task } from '@/types/task'

type TaskEditType = {
  id: number, 
  title?: string
}

export default function Home() {
  const [isCreate, setIsCreate] = React.useState<boolean>(false)
  const [newText, setNewTask] = React.useState<string>()
  const [taskEditData, setTaskEditData] = React.useState<TaskEditType | null>(null)

  const getTasks = useQuery<Task[]>({
    queryKey: ['task-list'],
    queryFn: async () => {
      const result: Task[] = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/tasks`,
      ).then((res) => res.json())
      return result
    },
  })

  const deleteTaskMutation = useMutation({
    mutationFn: async (taskId: number) => {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task/${taskId}`, {
        method: 'DELETE',
      }).then((res) => res.body)
    },
    onSuccess: () => {
      getTasks.refetch()
    },
  })

  const checkedTaskMutation = useMutation({
    mutationFn: async (taskId: number) => {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task/${taskId}`, {
        method: 'PATCH',
      })
    },
    onSuccess: () => {
      getTasks.refetch()
    },
  })

  const createTaskMutation = useMutation({
    mutationFn: async (title: string) => {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      })
    },
    onSuccess: () => {
      getTasks.refetch()
      setIsCreate(false)
    },
  })
  
  const editTaskMutation = useMutation({
    mutationFn: async (taskData: TaskEditType) => {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task/${taskData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: taskData.title }),
      })
    },
    onSuccess: () => {
      getTasks.refetch()
      setTaskEditData(null)
    },
  })

  const handleCreateNewTask = (event: React.MouseEvent) => {
    event.preventDefault()
    if (newText) {
      return createTaskMutation.mutate(newText)
    } else {
      alert('O texto não pode ser vazio')
    }
  }

  const handleEditTask = (event: React.MouseEvent) => {
    event.preventDefault()
    if (taskEditData && taskEditData.title) {
      return editTaskMutation.mutate(taskEditData)
    } else {
      alert('O texto não pode ser vazio')
    }
  }

  if (getTasks.isLoading) {
    return <div> Carregando ...</div>
  }

  const itemIsEdit = (id: number) => !taskEditData || taskEditData.id !== id

  return (
    <div className="flex h-full max-h-screen flex-col items-center">
      <h1 className="pt-10 text-2xl font-bold">Lista de tarefas</h1>
      {!isCreate && (
        <div className="flex p-5">
          <button
            className="flex items-center gap-2 p-2 hover:opacity-35"
            onClick={() => setIsCreate(true)}
          >
            <FaPlus color="#005A9C" />
            <p>Adicionar tarefa</p>
          </button>
        </div>
      )}
      {isCreate && (
        <div className="flex w-2/3 gap-4 py-5 pl-2">
          <input
            placeholder="Digite a tarefa"
            type="text"
            className="w-full border p-1 focus:outline-none"
            maxLength={60}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button
            className="rounded-xl bg-green-600 p-2 font-bold text-white"
            onClick={handleCreateNewTask}
          >
            Salvar
          </button>
        </div>
      )}
      <div className="flex h-2/3 w-2/3 flex-col gap-3 overflow-y-scroll p-2">
        {getTasks.data?.map((task) => (
          <div key={task.id}>
            {itemIsEdit(task.id) ? (
              <div
                className="flex flex-row items-center gap-x-2 rounded-md bg-slate-50 p-2"
              >
                <div className="flex-none">
                  <CheckboxComponent
                    checked={task.isChecked}
                    onClick={() => checkedTaskMutation.mutate(task.id)}
                  />
                </div>
                <div
                  className={
                    task.isChecked
                      ? 'flex-1 self-end text-gray-300 line-through'
                      : 'flex-1 self-end'
                  }
                >
                  <p>{task.title}</p>
                </div>
                <div className="flex flex-none flex-row gap-2">
                  <ActionButton
                    variant="edit"
                    disabled={task.isChecked}
                    onClick={() => setTaskEditData({ id: task.id })}
                  />

                  <ActionButton
                    variant="delete"
                    onClick={() => deleteTaskMutation.mutate(task.id)}
                    disabled={task.isChecked}
                  />
                </div>
              </div>
            ) : (
              <div
                className="flex flex-row items-center gap-x-2 rounded-md bg-slate-50 p-2"
              >
                <div className='flex flex-1'>
                  <input
                    placeholder="Digite a tarefa"
                    type="text"
                    className="w-full border p-1 focus:outline-none"
                    maxLength={60}
                    onChange={(event) => setTaskEditData({
                      id: task.id,
                      title: event.target.value
                    })}
                  />
                </div>
                <div className="flex flex-none flex-row">
                  <ActionButton
                    variant="save"
                    disabled={task.isChecked}
                    onClick={handleEditTask}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
