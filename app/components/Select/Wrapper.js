import styled from "styled-components";

const SelectWrapper = styled.select`
    border : 1px solid ${props => props.theme.borderColor};
    padding : 10px;
    float : left;
    margin : 0 0 20px 0;
`;

export default SelectWrapper;