
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import Todo from './components/Todo'
import { TasksProvider } from './contexts/TasksContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'


function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <TasksProvider>
        <Header/>
        <Todo/>
      </TasksProvider>
      <GlobalStyle />
    </ThemeProvider>

  )
}

export default App
