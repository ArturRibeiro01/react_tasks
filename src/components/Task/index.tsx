// import * as Checkbox  from '@radix-ui/react-checkbox'
import { CheckBoxIndicator, CheckBoxRoot, TaskItem, TaskList } from './styles'
import { Check, Trash } from 'phosphor-react'

interface TaskContentProps {
  completed: boolean
  content: string

}


export default function Task({content }: TaskContentProps){



  return (
    <TaskList>
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
    </TaskList>
  )
}
