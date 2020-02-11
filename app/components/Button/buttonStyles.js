import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.6em 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: ${props => props.theme.fontFamily};
  font-size: 12px;
  font-weight: 500;
  background: transparent;
  &:active {
    background: ${props => props.theme.primaryColor};
    color: #fff;
  }
`;

export default buttonStyles;
