import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    const handleChange = jest.fn();

    render(
        <Input
            labelText="Label"
            placeholder="Placeholder"
            name="Compname"
            onChange={handleChange}
        />,
    );

    const inputComp = screen.getByLabelText("Label");

    expect(inputComp).toBeInTheDocument();
    expect(inputComp).toHaveAttribute("placeholder", "Placeholder");
    expect(inputComp).toHaveAttribute("name", "Compname");
    // expect(inputComp).toHaveAttribute("value", "Compvalue")
});

test("calls callback on every user input", async () => {
    const handleChange = jest.fn();

    const user = userEvent.setup();

    render(
        <Input
            labelText="Label"
            placeholder="Placeholder"
            name="Compname"
            onChange={handleChange}
        />,
    );

    const inputComp = screen.getByLabelText("Label");

    await user.type(inputComp, "hello");

    expect(handleChange).toHaveBeenCalledTimes(5);
});
