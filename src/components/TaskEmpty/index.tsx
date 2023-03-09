import React from 'react'
import { TaskListContainerEmpty, TaskListEmptyDescription } from './styles'

import pranchetaImg from '../../assets/clipboard.svg'

export default function TaskEmpty() {
  return (
    <TaskListContainerEmpty>
    <img src= {pranchetaImg}  alt="icone_cadastro_vazio"/>
    <TaskListEmptyDescription>
      Você ainda não tem tarefas cadastradas
    </TaskListEmptyDescription>

    <TaskListEmptyDescription variant='subtitle' >
      Crie tarefas e organize seus itens a fazer
    </TaskListEmptyDescription>
</TaskListContainerEmpty>
  )
}
