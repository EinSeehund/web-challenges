import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export default function QuickActions({
    turnAllOn,
    turnAllOff,
    allLightsOn,
    allLightsOff,
}) {
    return (
        <StyledQuickActions>
            <Button type="button" onClick={turnAllOff} disabled={allLightsOff}>
                Turn all lights off
            </Button>
            <Button type="button" onClick={turnAllOn} disabled={allLightsOn}>
                Turn all lights on
            </Button>
        </StyledQuickActions>
    );
}
