'use client';
import { ActionButton } from '@/components/actionButton';
import { CheckboxComponent } from '@/components/ui/checkbox';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FaPlus } from "react-icons/fa"


type Task = {
  id: number,
  title: string
  isChecked: boolean,
  createdAt: string
  updatedAt: string
}

export default function Home() {
  const getTasks = useQuery<Task[]>({
    queryKey: ["task-list"],
    queryFn: async () => {
      const result: Task[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`).then(
        (res) => res.json()
      )
      return result
    },
  });

  const deleteTaskMutation = useMutation({
    mutationFn: async (taskId: number) => {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task/${taskId}`, {
        method: 'DELETE'
      }).then(res => res.body)
    },
    onSuccess:() =>{
      getTasks.refetch()
    }
  })

  const checkedTaskMutation = useMutation({
    mutationFn: async (taskId: number) => {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task/${taskId}`, {
        method: 'PATCH'
      })
    },
    onSuccess:() =>{
      getTasks.refetch()
    }
  })


  if(getTasks.isLoading){
    return <div> Carregando ...</div>
  }

  return (
    <div className="flex h-full max-h-screen flex-col items-center">
      <h1 className="pt-3 font-bold">Lista de tarefas</h1>
      <div className='flex flex-row gap-2 py-2'>
        <button className="items-center hover:bg-slate-50">
          <FaPlus color="#005A9C"/>
        </button>
        Adicionar tarefa
      </div>
      <div className="flex flex-col gap-2 max-w-lg">
        {getTasks.data?.map((task) =>(
          <div 
            className="flex flex-row gap-x-2 items-center bg-slate-50 p-2 rounded-md" 
            key={task.id}
          >
            <div className="flex-none">
             <CheckboxComponent 
               checked={task.isChecked}
               onClick={() => checkedTaskMutation.mutate(task.id)}
              />
            </div>
           <div className="flex-1 self-end">
              <p>{task.title}</p>
            </div>
            <div className="flex flex-row gap-2 flex-none">
              <ActionButton variant='edit' />
              <ActionButton variant='delete' onClick={() => deleteTaskMutation.mutate(task.id)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
