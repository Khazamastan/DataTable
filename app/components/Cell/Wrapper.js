/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
const Wrapper = styled.div`
  flex-basis: ${props =>
    props.columnWidth ? props.columnWidth : `${100 / props.count}%`};
  flex-grow: ${props =>
    props.columnWidth ? (props.layout === 'fixed' ? 0 : 1) : 1};
  flex-shrink: ${props =>
    props.columnWidth ? (props.layout === 'fixed' ? 0 : 1) : 1};

  min-width: ${props => (props.minWidth ? props.minWidth : props.width)};

  max-width: 100%;
  text-align: left;
  padding: 4px 10px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  display: flex;
  align-items: center;
  &.numeric {
    justify-content: flex-end;
  }
  p {
    margin: 0;
    color: ${props => props.theme.secondaryColor};
    font-size: 13px;
  }
`;
export default Wrapper;
