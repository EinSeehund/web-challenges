import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";

export default function HomePage() {
    return (
        <BoxContainer>
            <BoxWithClassName />
            <BoxWithClassName isBlack />
            <BoxWithStyledComponents />
            <BoxWithStyledComponents $isBlack />
        </BoxContainer>
    );
}

const BoxContainer = styled.div`
    display: flex;
`;
