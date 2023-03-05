import { PlusCircle } from 'phosphor-react';
import { StatusTask, TaskListContainerEmpty, TaskListEmptyDescription, TasksContainer, TasksStats, ToDoContainer, ToDoNewTaskContainer } from './styles';

import pranchetaImg from '../../assets/clipboard.svg'


export default function Todo() {

  const tasks = [
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet consectetur'
  },
  {
    id: 2,
    content: 'Lorem ipsum dolor sit '
  }
]



  return (
    <ToDoContainer>
      <ToDoNewTaskContainer>
        <input type="text" placeholder='Adicione uma nova tarefa'/>
        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </ToDoNewTaskContainer>


      <TasksContainer>
        <TasksStats>
          <article>
            <StatusTask>Tarefas Criadas</StatusTask>
            <span>0</span>
          </article>
          <article>
            <StatusTask variant="complete">Concluídas</StatusTask>
            <span>0</span>
          </article>
        </TasksStats>


        {tasks.length > 3 ?

            //@ts-ignore
          tasks.map( (task) => <li>{ task.id }</li>)
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
