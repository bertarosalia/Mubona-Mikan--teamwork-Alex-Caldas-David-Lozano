import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  describe("When it receives a function and user clics on it", () => {
    test("Then it should call the function", () => {
      const mockActionOnClick = jest.fn();

      render(
        <Button
          text="patata"
          actionOnClick={() => {
            mockActionOnClick();
          }}
        />
      );

      const button = screen.getByRole("button", { name: "patata" });
      userEvent.click(button);

      expect(mockActionOnClick).toHaveBeenCalled();
    });
  });
});
