'use client';
import { ActionButton } from '@/components/actionButton';
import { CheckboxComponent } from '@/components/ui/checkbox';
import { useQuery } from '@tanstack/react-query';
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa"


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
              />
            </div>
           <div className="flex-1 self-end">
              <p>{task.title}</p>
            </div>
            <div className="flex flex-row gap-2 flex-none">
              <button className='flex bg-white rounded-md items-center justify-center shadow-sm min-h-[30px] min-w-[30px] hover:bg-[#EEEEEE]'>
                <FaPencilAlt color="#005A9C"/>
              </button>
              <button className='flex bg-white rounded-md items-center justify-center shadow-sm min-h-[30px] min-w-[30px] hover:bg-[#EEEEEE]'>
               <FaTrashAlt color="#BB0000"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
