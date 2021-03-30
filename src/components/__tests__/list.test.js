import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { List } from "../List";
import { Button } from "../Button";

describe("When everything is working perfectly", () => {
  test("Should the name appear in the list when the user types and clicks on the button", async () => {
    render(<List />);

    userEvent.type(screen.getByRole("textbox"), "Mateus"); //evento de digitar
    userEvent.click(screen.getByRole("button", { name: "Submit" }));

    userEvent.type(screen.getByRole("textbox"), "Laura"); //evento de digitar
    userEvent.click(screen.getByRole("button", { name: "Submit" }));

    const myList = await screen.findAllByRole("listitem");

    expect(myList).toHaveLength(2);
  });
});
