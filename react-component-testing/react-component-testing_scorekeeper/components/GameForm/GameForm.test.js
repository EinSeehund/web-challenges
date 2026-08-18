import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";
import Player from "../Player";

jest.mock("next/router", () => ({
    useRouter() {
        return { push: jest.fn() };
    },
}));

test("renders two input fields and a button", () => {
    const handleCreateGame = jest.fn();

    render(<GameForm onCreateGame={handleCreateGame} />);

    const inputFieldName = screen.getByLabelText("Name of game");
    const inputFieldPlayers = screen.getByLabelText(
        "Player names, separated by comma",
    );
    const createButton = screen.getByRole("button", { name: "Create game" });

    expect(inputFieldName).toBeInTheDocument();
    expect(inputFieldPlayers).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
    const handleCreateGame = jest.fn();

    render(<GameForm onCreateGame={handleCreateGame} />);

    const gameForm = screen.getByRole("form", { name: "Create a new game" });

    expect(gameForm).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
    const handleCreateGame = jest.fn();
    const user = userEvent.setup();

    render(<GameForm onCreateGame={handleCreateGame} />);

    const inputFieldName = screen.getByLabelText("Name of game");
    const inputFieldPlayers = screen.getByLabelText(
        "Player names, separated by comma",
    );
    const createButton = screen.getByRole("button", { name: "Create game" });

    await user.type(inputFieldName, "GameName")
    await user.type(inputFieldPlayers, "PlayerName")
    await user.click(createButton)

    expect(handleCreateGame).toHaveBeenCalledWith({nameOfGame: "GameName", playerNames: ["PlayerName"]})
});

test("does not submit form if one input field is left empty", async () => {
    const handleCreateGame = jest.fn();
    const user = userEvent.setup();

    render(<GameForm onCreateGame={handleCreateGame} />);

    const inputFieldName = screen.getByLabelText("Name of game");
    const inputFieldPlayers = screen.getByLabelText(
        "Player names, separated by comma",
    );
    const createButton = screen.getByRole("button", { name: "Create game" });

    await user.type(inputFieldName, "GameName")
    await user.click(createButton)

    expect(handleCreateGame).toHaveBeenCalledTimes(0)
});
