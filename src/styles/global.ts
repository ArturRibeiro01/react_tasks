import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    background-color: ${(props) => props.theme['gray-600']};
    -webkit-font-smoothing: antialised;
    color: ${(props) => props.theme.white};
  }


  body, input, textarea, button {
    font: 400 1rem 'Inter',sans-serif;
  }
`
