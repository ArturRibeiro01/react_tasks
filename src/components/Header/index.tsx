
import { HeaderContainer, HeaderContent } from './styles'
import logoToDo from '../../assets/logo_todo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
       <img src={logoToDo}  alt="logo_todo"  />
      </HeaderContent>
    </HeaderContainer>
  )
}
