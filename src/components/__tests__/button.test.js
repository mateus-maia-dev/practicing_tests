import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";
import { List } from "../List";

describe("When the button is working normally", () => {
  test("The button gotta be disabled when the input field is empty", () => {
    render(<List />);

    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  test("The button gotta be enabled when the input field isn´t empty", () => {
    render(<List />);

    userEvent.type(screen.getByRole("textbox"), "Mateus");

    expect(screen.getByRole("button", { name: "Submit" })).toBeEnabled();
  });
});
