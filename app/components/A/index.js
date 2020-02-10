/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const A = styled.a`
  color: ${props => props.theme.primaryColor};

  &:hover {
    color: ${props => props.theme.anchor.hover};
  }
`;

export default A;
