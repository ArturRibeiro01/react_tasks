import styled from 'styled-components'
import * as Checkbox  from '@radix-ui/react-checkbox'


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

      font-size: 14px;
      color: ${(props) => props.theme['gray-100']};
    }

    .trash-icon {
      color: ${(props) => props.theme['gray-300']};
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['danger']};
        transition: color 0.2s ease-in-out;
             background-color: ${(props) => props.theme['gray-400']};
      }
    }

  }

`
export const CheckBoxRoot = styled(Checkbox.Root)`
  background-color: transparent;
  width: 20px;
  height: 20px;
  border: 2px solid  ${(props) => props.theme['blue']};
  border-radius: 999%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme['blue-dark']};
  }


  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background:  ${(props) => props.theme['purple-dark']};
    border-color:  ${(props) => props.theme['purple-dark']};

    &:hover {
      background-color:${(props) => props.theme['purple']};
      border-color:  ${(props) => props.theme['purple']};
    }

    svg {
      position: relative;
      top: 1px;
      color: ${(props) => props.theme.white};
      font-weight: bold;
    }
  }

`
export const CheckBoxIndicator = styled(Checkbox.Indicator)`
  background-color: transparent;
`
