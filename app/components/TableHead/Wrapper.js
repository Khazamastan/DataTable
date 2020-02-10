import styled from 'styled-components';
const Wrapper = styled.div`
  > div {
    display: flex;
    color: ${props => props.theme.secondaryColor};
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }
`;
export default Wrapper;
