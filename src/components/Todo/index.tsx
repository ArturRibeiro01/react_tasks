

import { StatusTask, TasksContainer, TasksStats, ToDoContainer, ToDoNewTaskForm } from './styles';

import { TasksContext } from '../../contexts/TasksContext';
import { useContextSelector } from 'use-context-selector';
import { useForm } from 'react-hook-form';
import {  z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckBoxIndicator, CheckBoxRoot, DateCreatedContainer, TaskItem, TaskList } from './task';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import TaskEmpty from '../TaskEmpty';

import { Check, PlusCircle, Trash } from 'phosphor-react';
import { useState } from 'react';


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

  const updateStatusTask = useContextSelector(
    TasksContext,
    (context) => {
      return context.updateItem
    },
  )

  const totalCompleted = useContextSelector(
    TasksContext,
    (context) => {
      return context.calcTaskFinished
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
    await deleteTask(id)
  }

  async function handleEditTask (data: any ) {
    const selectedItem = data
    let itemclicado = tasks.find(item => item.id == selectedItem.id);
    itemclicado?.completed == true ? (
      itemclicado.completed = false
    ) : (
      //@ts-ignore
      itemclicado.completed = true
    )
    // console.log('itemclicado_depois', itemclicado)
    await updateStatusTask({
      //@ts-ignore
      id: itemclicado?.id,
      //@ts-ignore
      content: itemclicado?.content,
      //@ts-ignore
      completed:itemclicado?.completed,
      //@ts-ignore
      createdAt:itemclicado?.createdAt,
      // lastEditTask: new Date()
    })


  }



  return (
    <ToDoContainer>
      <ToDoNewTaskForm onSubmit={handleSubmit(handleCreateNewTask)}>

        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          {...register('content',{required: true })}
          required
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
            <span> {totalCompleted()} de {tasks.length} </span>
          </article>
        </TasksStats>

        {tasks.length != 0 ?
          (
            tasks.map((task) =>
              <TaskList key={task.id}>
                <TaskItem >
                  <div>
                    <CheckBoxRoot
                      className="CheckboxRoot"
                      id="c1"
                      defaultChecked={task.completed}
                      onClick={() => handleEditTask(task)}
                    >
                      <CheckBoxIndicator  >
                        <Check size={14} weight="bold" />
                      </CheckBoxIndicator>
                    </CheckBoxRoot>

                    {task.completed == false ?
                      <p>{task.content}</p>
                      :
                      <p className='completed-item'>{task.content}</p>
                    }

                    <button
                      className="trash-icon"
                      onClick={ () => handleDeleteTask(task.id) }
                    >
                      <Trash size={20}  />
                    </button>
                  </div>
                </TaskItem>
                <DateCreatedContainer>
                 <p>Criado em
                    {format(
                    parseISO(task.createdAt),
                    " dd 'de' MMMM', às ' HH:mm'h'",
                    { locale: pt }
                    )}
                  </p>
                </DateCreatedContainer>
              </TaskList>
            )
          )
        :
        <TaskEmpty/>
        }

      </TasksContainer>


    </ToDoContainer>
  )
}
