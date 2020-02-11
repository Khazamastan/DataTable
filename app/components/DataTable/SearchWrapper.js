import styled from 'styled-components';
const SearchWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  overflow: hidden;
  > input {
    flex: 1 0 auto;
    border-radius: 0 3px 3px 0;
  }
  > div {
    flex-basis: 100px;
    > button {
      width: 100%;
      border: 1px solid ${props => props.theme.borderColor};
      border-radius: 3px 0 0 3px;
    }
  }
`;

export default SearchWrapper;
