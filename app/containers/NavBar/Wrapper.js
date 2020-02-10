import styled from 'styled-components';
const NavWrapper = styled.div`
  ul.nav {
    display: block;
    list-style: none;
    border-bottom : 1px solid ${props => props.theme.borderColor};
    > li {
      display: inline-block;
      padding: 5px 15px;
      border-bottom: 2px solid ${props => props.theme.secondaryColor};
      > a {
      }
    }
  }
`;

export default NavWrapper;
