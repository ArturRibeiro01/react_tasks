import { Trash } from 'phosphor-react'
import { TaskContainer, TaskItem } from './styles'

interface TaskContentProps {
  completed: boolean
  content: string

}


export default function Task({content, completed }: TaskContentProps){

  return (
    <TaskContainer>
      <TaskItem>
        <div>
          <p>
            {content}
          </p>
          <Trash size={20} />
        </div>
      </TaskItem>
    </TaskContainer>
  )
}
