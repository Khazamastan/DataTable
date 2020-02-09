import styled from "styled-components";

const InputWrapper = styled.input`
    display: block;
    border : 1px solid #dcdcdc;
    padding : 5px 15px;
    margin : 0 0 0px 0;
    color : #000;
    font-size: 14px;
    &:focus {
        outline: 0;
    }
`;

export default InputWrapper;