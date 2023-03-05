import styled from 'styled-components'


export const TaskContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`

export const TaskItem = styled.li`
  background-color: ${(props) => props.theme['gray-500']};;
  border: 1px solid ${(props) => props.theme['gray-400']};

  border-radius: 8px;
  padding: 1rem;
  list-style: none;

  div {
    display: flex;
    justify-content: space-between;
    gap: 8px;


    p {
      flex: 1;
      white-space: wrap;
}
      font-size: 14px;
      color: ${(props) => props.theme['gray-100']};
    }
  }

`
