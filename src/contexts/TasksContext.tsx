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
}

interface CreateTaskInput {
  content: string,
  completed: boolean
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


  const fetchTasks = useCallback(async () => {
    const response = await api.get('/tasks', {
      params: {},
    })
    setTasks(response.data)
  }, [])

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






  return (
    <TasksContext.Provider
      value={{ tasks, fetchTasks, createNewTask}}
    >
      {children}
    </TasksContext.Provider>
  )


}
