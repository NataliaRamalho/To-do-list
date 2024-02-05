'use client'

import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'

import { FaPlus } from 'react-icons/fa'

import { TaskType } from '@/types/task'
import { InputTaskTitle } from '@/components/inputTaskTitle'
import { Task } from '@/components/task'
import { EditTask } from '@/components/editTask'
import { TaskListLoading } from '@/components/taskListLoading'

export type TaskEditType = {
  id: number
  title?: string
}

export default function Home() {
  const [isCreate, setIsCreate] = React.useState<boolean>(false)
  const [newText, setNewTask] = React.useState<string>()
  const [taskEditId, setTaskEditId] = React.useState<number | null>(null)

  const getTasks = useQuery<TaskType[]>({
    queryKey: ['task-list'],
    queryFn: async () => {
      const result: TaskType[] = await fetch(
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
      return await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/task/${taskData.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: taskData.title }),
        },
      )
    },
    onSuccess: () => {
      getTasks.refetch()
      setTaskEditId(null)
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

  const handleEditTask = (taskId: number, title?: string) => {
    if (title) {
      return editTaskMutation.mutate({ id: taskId, title })
    } else {
      alert('O texto não pode ser vazio')
    }
  }

  const itemIsEdit = (id: number) => !taskEditId || taskEditId !== id

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
          <InputTaskTitle
            placeholder="Digite a tarefa"
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
      {getTasks.isLoading ? (
        <TaskListLoading />
      ) : (
        <div className="flex h-2/3 w-2/3 flex-col gap-3 overflow-y-scroll p-2">
          {getTasks.data?.map((task) => (
            <div key={task.id}>
              {itemIsEdit(task.id) ? (
                <Task
                  taskData={task}
                  key={task.id}
                  onCheckedTask={(id) => checkedTaskMutation.mutate(id)}
                  onDeleteTask={(id) => deleteTaskMutation.mutate(id)}
                  onEditTask={(id) => setTaskEditId(id)}
                />
              ) : (
                <EditTask taskData={task} onSaveTask={handleEditTask} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
