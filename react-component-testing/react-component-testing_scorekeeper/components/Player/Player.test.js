import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    const handleDecrease = jest.fn();
    const handleIncrease = jest.fn();

    render(
        <Player
            name="Playername"
            score={3}
            onDecreasePlayerScore={handleDecrease}
            onIncreasePlayerScore={handleIncrease}
        />,
    );

    const playerEl = screen.getByText("Playername");
    const buttonArray = screen.getAllByRole("button");

    expect(playerEl).toBeInTheDocument();
    expect(buttonArray).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
    const handleDecrease = jest.fn();
    const handleIncrease = jest.fn();

    const user = userEvent.setup();

    render(
        <Player
            name="Playername"
            score={3}
            onDecreasePlayerScore={handleDecrease}
            onIncreasePlayerScore={handleIncrease}
        />,
    );

    const increaseButton = screen.getByLabelText("Increase Score");
    const decreaseButton = screen.getByLabelText("Decrease Score");

    await user.click(increaseButton);
    await user.click(decreaseButton);

    expect(handleIncrease).toHaveBeenCalledTimes(1);
    expect(handleDecrease).toHaveBeenCalledTimes(1);
});
