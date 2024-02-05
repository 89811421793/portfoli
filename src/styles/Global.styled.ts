import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";


export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.baseFont};
  }

ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background-color: unset;
}

  a {
    text-decoration: none;
    cursor: pointer;
}

section,header,footer {
    background-color: ${theme.colors.primaryBg};
}
`