import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a gif", () => {
      const imageTitle = "Mandarin dancing";
      render(<Loading />);

      const test = screen.getByTitle(imageTitle);

      expect(test).toBeInTheDocument();
    });
  });
});
