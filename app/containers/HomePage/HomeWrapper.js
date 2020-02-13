import styled from 'styled-components';
const HomeWrapper = styled.div`
  margin: 0 auto;
  min-height: 101vh;
  padding: 0 100px 40px 100px;
  @media (max-width: 768px) {
    padding: 0 20px 40px 20px;
  }
  background: transparent url(${props => props.bg}) center/cover;
  transition: background 0.3s ease-in;
  .table-container {
    min-height: 400px;
    position: relative;
    .table-loader {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default HomeWrapper;
