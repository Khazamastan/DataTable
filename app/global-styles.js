import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    color: ${props => props.theme.textColor};
    outline: 0;
    font-size: 14px;
  }

  body {
    font-family:${props => props.theme.fontFamily};
  }

  body.fontLoaded {
    font-family: ${props => props.theme.fontFamily};
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family:${props => props.theme.fontFamily};
    line-height: 1.5em;
  }
  .ReactVirtualized__List, .ReactVirtualized__Grid__innerScrollContainer{
    outline: 0;
    overflow: initial !important;
  }
`;

export default GlobalStyle;
