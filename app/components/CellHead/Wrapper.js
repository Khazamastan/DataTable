/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
const Wrapper = styled.div`
  flex-basis: ${props =>
    props.columnWidth ? props.columnWidth : `${100 / props.cellsCount}%`};
  flex-grow: ${props =>
    props.columnWidth ? (props.layout === 'fixed' ? 0 : 1) : 1};
  flex-shrink: ${props =>
    props.columnWidth ? (props.layout === 'fixed' ? 0 : 1) : 1};

  min-width: ${props => (props.minWidth ? props.minWidth : props.width)};
  max-width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.borderColor};
  padding: 5px 10px 8px;
  &.numeric {
    justify-content: flex-end;
  }
  &.checkbox {
    padding-left: 5px;
  }
  > p {
    text-align: left;
    font-size: 13px;
    font-weight: bold;
    &.sort {
      cursor: pointer;
    }
    .sort-icon {
      font-size: 8px;
    }
  }
`;

export const CheckBoxViewWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  border: 2px solid ${props => props.theme.borderColor};
  background: transparent;
  border-radius: 3px;
  padding: 3px 6px;
  outline: 0px;
  > input {
    margin-right: 5px;
  }
`;

export default Wrapper;
