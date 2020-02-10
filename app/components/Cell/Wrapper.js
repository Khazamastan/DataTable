import styled from "styled-components";
const Wrapper = styled.div`
    flex-basis: ${props => props.columnWidth ? props.columnWidth : `${100/(props.count)}%`};
    flex-grow: ${props => props.columnWidth ? 0 : 1};
    max-width: 100%;
    text-align: left;
    padding: 4px 10px;
    display:flex;
    align-items: center;
    &.numeric{
        justify-content: flex-end;
    }
    p{
        margin : 0;
        color: ${(props) => props.theme.secondaryColor};
        font-size: 13px;
    }
`;
export default Wrapper;
