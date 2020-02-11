import styled from 'styled-components';

const InputWrapper = styled.input`
  display: block;
  border: 1px solid ${props => props.theme.borderColor};
  padding: 5px 15px;
  margin: 0 0 0px 0;
  color: ${props => props.theme.secondaryColor};
  font-size: 14px;
  &:focus {
    outline: 0;
  }
`;

export default InputWrapper;
