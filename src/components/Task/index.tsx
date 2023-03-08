import * as Checkbox  from '@radix-ui/react-checkbox'
import { CheckBoxIndicator, CheckBoxRoot, TaskContainer, TaskItem } from './styles'
import { Check, Trash } from 'phosphor-react'

interface TaskContentProps {
  completed: boolean
  content: string

}


export default function Task({content }: TaskContentProps){



  return (
    <TaskContainer>
      <TaskItem>
        <div>

          <CheckBoxRoot className="CheckboxRoot"  id="c1">
            <CheckBoxIndicator className="CheckboxIndicator">
              <Check size={14} weight="bold" />
            </CheckBoxIndicator>
          </CheckBoxRoot>

          <p>
            {content}
          </p>

          <button
            className="trash-icon"
            // onClick={}
          >
              <Trash size={20}  />
          </button>

        </div>
      </TaskItem>
    </TaskContainer>
  )
}
