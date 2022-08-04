import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  const testModalMessage = "Cajateee! *argentino gestuing*";
  const testModalType = true;

  describe("When instantiated", () => {
    test("Then it should show the message it have recived", () => {
      render(<Modal message={testModalMessage} type={testModalType} />);

      const testModal = screen.getByText(testModalMessage);
      expect(testModal).toBeInTheDocument();
    });
  });
});
