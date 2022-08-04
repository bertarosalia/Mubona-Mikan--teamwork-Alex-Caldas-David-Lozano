import { render, screen } from "@testing-library/react";
import AnimesPage from "./AnimesPage";

describe("Given an Animes page component", () => {
  describe("When it´s rendered", () => {
    test("Then it should show an h2 with 'Anime' text inside", () => {
      const textH2 = "Anime";

      render(<AnimesPage />);

      const expectedText = screen.getByRole("heading", { name: textH2 });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
