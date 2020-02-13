import styled from 'styled-components';
const Wrapper = styled.div`
  > div {
    display: flex;
    color: ${props => props.theme.secondaryColor};
  }
`;
export default Wrapper;
