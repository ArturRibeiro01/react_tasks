import styled, { css } from 'styled-components'


export const ToDoContainer = styled.section`
  /* background-color: ${(props) => props.theme['gray-200']}; */
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 0 1.5rem;

`
export const ToDoNewTaskContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: -2rem;

  input {
    flex: 1;
    border: 1px solid transparent;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
      font-size: 16px;
    }

    &:focus {
      border-color:  ${(props) => props.theme['purple-dark']};
      transition: background-color 0.2s, border-color 0.2s;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 1rem;
    border: 0;
    border-radius: 8px;
    background: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['blue']};
      transition: background-color 0.2s, border-color 0.2s;
    }
  }

`

export const TasksContainer = styled.section`
  margin-top: 4rem;
`


export const TasksStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  article {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span {
    padding: 2px 8px;
    background-color: ${(props) => props.theme['gray-400']};
    border-radius: 999px;
    font-size: 12px;
    font-weight: bold;

  }
`

interface StatusTasksProps {
  variant?: 'complete'
}

export const StatusTask = styled.p<StatusTasksProps>`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme['blue']};


  ${(props) =>
    props.variant === 'complete' &&
    css`
      color: ${(props) => props.theme['purple']};
    `}

`

export const TaskListContainerEmpty = styled.div`
  margin-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 56px;
    margin-bottom: 1.5rem;
  }

`

interface StatusEmptyDescriptionProps {
  variant?: 'subtitle'
}

export const TaskListEmptyDescription = styled.p<StatusEmptyDescriptionProps>`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-300']};

  ${(props) =>
    props.variant === 'subtitle' &&
    css`
      font-weight: normal;
    `}
`
