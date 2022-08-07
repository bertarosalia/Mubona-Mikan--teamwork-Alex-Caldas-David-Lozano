import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UIContext } from "../../store/contexts/UIContext/UIContext";
import UIContextProvider from "../../store/contexts/UIContext/UIContextProvider";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When instantiated", () => {
    test("Then it should show the message it have recived", () => {
      const testModalMessage = "Cajateee! *argentino gestuing*";
      const testModalType = true;

      render(
        <UIContextProvider>
          <Modal message={testModalMessage} type={testModalType} />
        </UIContextProvider>
      );

      const testModal = screen.getByText(testModalMessage);
      expect(testModal).toBeInTheDocument();
    });
  });

  describe("Wen instantied with type as positive value", () => {
    test("Then it should show a Modal with green background", () => {
      const testModalMessage = "Luke, soy tu papu";
      const testModalType = true;

      render(<Modal message={testModalMessage} type={testModalType} />);

      const test = screen.getByText(testModalMessage);
      const testStyles = getComputedStyle(test);

      expect(testStyles.backgroundColor).toBe("rgb(74, 172, 14)");
    });
  });

  describe("Wen instantied with type as negative value", () => {
    test("Then it should show a Modal with red background", () => {
      const testModalMessage = "pepet";
      const testModalType = false;

      render(<Modal message={testModalMessage} type={testModalType} />);

      const test = screen.getByText(testModalMessage);
      const testStyles = getComputedStyle(test);

      expect(testStyles.backgroundColor).toBe("rgb(255, 46, 0)");
    });
  });

  describe("When instantiated with mocked function", () => {
    test("Then it should be called when click button", () => {
      const mockedDispatch = jest.fn();

      const initialUI = {
        ui: {
          isLoading: false,
          isModalShowing: false,
          message: "",
          type: false,
        },
        UIdispatch: mockedDispatch,
      };

      render(
        <UIContext.Provider value={initialUI}>
          <Modal message={""} type={false} />
        </UIContext.Provider>
      );

      const modalButton = screen.getByRole("button", { name: "X" });
      userEvent.click(modalButton);

      expect(mockedDispatch).toBeCalled();
    });
  });
});
