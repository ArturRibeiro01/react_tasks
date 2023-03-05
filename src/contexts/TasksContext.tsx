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
  // fetchTasks: (query?: string) => Promise<void>

}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {

  const [tasks, setTasks] = useState<Tasks[]>([])


  const fetchTasks = useCallback(async () => {
    const response = await api.get('/tasks', {
      params: {

      },
    })
    setTasks(response.data)
  }, [])


  useEffect(() => {
    fetchTasks()
  }, [])


  return (
    <TasksContext.Provider
      value={{ tasks, fetchTasks }}
    >
      {children}
    </TasksContext.Provider>
  )


}
