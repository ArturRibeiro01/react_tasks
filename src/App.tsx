
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import Todo from './components/Todo'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'


function App() {

  return (

    <>
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Todo/>
    <GlobalStyle />
    </ThemeProvider>

    </>
  )
}

export default App
