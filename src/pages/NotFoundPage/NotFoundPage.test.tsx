import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a not found page component", () => {
  describe("When is rendered", () => {
    test("Then it should show a '404 ERROR' inside a h2 label", () => {
      const textInside = "404 ERROR";

      render(<NotFoundPage />);

      const expectedText = screen.getByRole("heading", { name: textInside });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
