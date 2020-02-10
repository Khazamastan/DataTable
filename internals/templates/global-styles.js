import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family:${(props) => props.theme.fontFamily};
  }

  body.fontLoaded {
    font-family: 'Roboto',${(props) => props.theme.fontFamily};
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family:'Roboto',${(props) => props.theme.fontFamily};
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
