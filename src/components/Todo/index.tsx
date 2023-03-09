
import { Check, PlusCircle, Trash } from 'phosphor-react';
import { StatusTask, TaskListContainerEmpty, TaskListEmptyDescription, TasksContainer, TasksStats, ToDoContainer, ToDoNewTaskForm } from './styles';

import pranchetaImg from '../../assets/clipboard.svg'

import { TasksContext } from '../../contexts/TasksContext';
import { useContextSelector } from 'use-context-selector';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckBoxIndicator, CheckBoxRoot, TaskItem, TaskList } from '../Task/styles';


const newTaskFormSchema = z.object({
  completed: z.boolean(),
  content: z.string({
    required_error: "Preencha o campo com a tarefa",
  }),
})


type NewTaskFormInput = z.infer<typeof newTaskFormSchema>




export default function Todo() {

  const tasks = useContextSelector(TasksContext, (context) => {
    return context.tasks
  });

  const createTask = useContextSelector(
    TasksContext,
    (context) => {
      return context.createNewTask
    },
  )

  const deleteTask = useContextSelector(
    TasksContext,
    (context) => {
      return context.deleteTask
    },
  )

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
    reset
  } = useForm<NewTaskFormInput>({
    resolver: zodResolver(newTaskFormSchema),
    defaultValues: {
      completed: false
    },

  })


  async function handleCreateNewTask(data: NewTaskFormInput) {
    const { content, completed } = data

    await createTask({
      content,
      completed,
    })

    reset()
  }

  async function handleDeleteTask ( data: any){
    const  id  = data
    console.log('item selecionado', id)

    await deleteTask(id)


  }


  return (
    <ToDoContainer>
      <ToDoNewTaskForm onSubmit={handleSubmit(handleCreateNewTask)}>

        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          {...register('content',{required: true })}
        />

        <button type="submit" disabled={isSubmitting}>
          Criar
          <PlusCircle size={18}/>
        </button>

      </ToDoNewTaskForm>


      <TasksContainer>
        <TasksStats>
          <article>
            <StatusTask>Tarefas Criadas</StatusTask>
            <span>{tasks.length}</span>
          </article>
          <article>
            <StatusTask variant="completed">Concluídas</StatusTask>
            <span>

            </span>
          </article>
        </TasksStats>


        {tasks.length != 0 ? (

          tasks.map((task) =>
            <TaskList key={task.id}>
              <TaskItem >
                <div>
                  <CheckBoxRoot className="CheckboxRoot"  id="c1">
                    <CheckBoxIndicator className="CheckboxIndicator">
                      <Check size={14} weight="bold" />
                    </CheckBoxIndicator>
                  </CheckBoxRoot>

                  <p>{task.content}</p>

                  <button
                    className="trash-icon"
                    onClick={ () => handleDeleteTask(task.id) }
                  >
                    <Trash size={20}  />
                  </button>
                </div>
              </TaskItem>
              teste
            </TaskList>

              // <Task
              //   key={task.id}
              //   content={task.content}
              //   completed={task.completed}
              // />
            )

        )
        :
          <TaskListContainerEmpty>
              <img src= {pranchetaImg}  alt="icone_cadastro_vazio"/>
              <TaskListEmptyDescription>
                Você ainda não tem tarefas cadastradas
              </TaskListEmptyDescription>

              <TaskListEmptyDescription variant='subtitle' >
                Crie tarefas e organize seus itens a fazer
              </TaskListEmptyDescription>
          </TaskListContainerEmpty>
        }

      </TasksContainer>


    </ToDoContainer>
  )
}
