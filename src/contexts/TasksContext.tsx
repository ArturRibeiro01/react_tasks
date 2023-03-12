import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios';


interface Tasks {
  id: number;
  content: string;
  completed: boolean;
  createdAt: string
}

interface TasksContextType {
  tasks: Tasks[]
  fetchTasks: () => void
  createNewTask : (data: CreateTaskInput) => Promise<void>
  updateItem: (data: UpdateTask) => Promise<void>
  deleteTask : (data: DeleteTask) => Promise<void>
  calcTaskFinished : () => ReactNode

}

interface CreateTaskInput {
  content: string,
  completed: boolean
}

interface UpdateTask {
  id: string,
  completed: boolean,
  content: string,
  createdAt: Date
}
interface DeleteTask {
  id: string,
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {

  const [tasks, setTasks] = useState<Tasks[]>([])


  useEffect(() => {
    fetchTasks()
  }, [])

  //Faz um fetch de todas as minhas tasks
  const fetchTasks = useCallback(async () => {
    const response = await api.get('/tasks', {
      params: {},
    })
    setTasks(response.data)
  }, [])



  //Cria uma nova task
  const createNewTask = useCallback(
    async (data: CreateTaskInput) => {
      const { content, completed } = data

      const response = await api.post('tasks', {
        content,
        completed,
        createdAt: new Date(),
      })

      setTasks((state) => [response.data, ...state])
    },
    [],
  )

  //Atualiza o status de um item

  const updateItem = useCallback(
      async (data: UpdateTask) => {
        const { id, completed, content, createdAt } = data

        const response = await api.put(`tasks/${id}`, {
          content,
          completed,
          createdAt,
        })

        // console.log('updatetask', data)
        fetchTasks()
      },
      [],
  )

  //Deleta uma task
  const deleteTask = useCallback(
    async (data: DeleteTask) => {
      const  id  = data

      await api.delete(`tasks/${id}`)
      fetchTasks()
    },
    [],
  )

  //filtra todas as tasks existentes e separa as concluidas
  const calcTaskFinished = useCallback(() => {
    let selectCompletedTasks = tasks.filter(task => (task.completed == true));
    let totalcompleted = selectCompletedTasks.length

    return totalcompleted
  }, [tasks])


  return (
    <TasksContext.Provider
      value={{
        tasks,
        fetchTasks,
        createNewTask,
        deleteTask,
        calcTaskFinished,
        updateItem
      }}
    >
      {children}
    </TasksContext.Provider>
  )


}
