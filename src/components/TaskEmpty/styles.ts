import styled, { css } from 'styled-components'

// Sem Tasks

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
