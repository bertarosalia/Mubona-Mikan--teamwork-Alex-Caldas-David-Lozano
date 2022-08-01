import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a button component", () => {
  const buttonText = "delete";

  describe("When it receives a 'delete' text", () => {
    test("Then it should should show a 'delete' text inside", () => {
      render(<Button text={buttonText} actionOnClick={() => {}} />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toHaveTextContent(buttonText);
    });
  });
});
