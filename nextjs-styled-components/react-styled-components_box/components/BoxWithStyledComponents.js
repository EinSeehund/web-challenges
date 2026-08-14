import styled from "styled-components";

export default function BoxWithStyledComponents(props) {
    return <StyledBox $isBlack={props.$isBlack}></StyledBox>;
}

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => (props.$isBlack ? "black" : "green")};
    margin: 2rem;

    &:hover {
        background-color: red;
    }
`;
