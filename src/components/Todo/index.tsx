
import { PlusCircle } from 'phosphor-react';
import { StatusTask, TaskListContainerEmpty, TaskListEmptyDescription, TasksContainer, TasksStats, ToDoContainer, ToDoNewTaskContainer } from './styles';

import pranchetaImg from '../../assets/clipboard.svg'
import Task from '../Task';
import { mockTasks } from '../../Mocks/tasks';

import { TasksContext } from '../../contexts/TasksContext';
import { useContextSelector } from 'use-context-selector';



export default function Todo() {

  const tasks = useContextSelector(TasksContext, (context) => {
    return context.tasks
  })

  console.log('tasks', tasks)


  return (
    <ToDoContainer>
      <ToDoNewTaskContainer>
        <input type="text" placeholder='Adicione uma nova tarefa'/>
        <button type="submit">
          Criar
          <PlusCircle size={18}/>
        </button>
      </ToDoNewTaskContainer>


      <TasksContainer>
        <TasksStats>
          <article>
            <StatusTask>Tarefas Criadas</StatusTask>
            <span>{tasks.length}</span>
          </article>
          <article>
            <StatusTask variant="complete">Concluídas</StatusTask>
            <span>

            </span>
          </article>
        </TasksStats>


        {tasks.length != 0 ? (

          tasks.map((task) =>
            <Task
              key={task.id}
              content={task.content}
              completed={task.completed}
            />
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


      <div></div>


    </ToDoContainer>
  )
}
