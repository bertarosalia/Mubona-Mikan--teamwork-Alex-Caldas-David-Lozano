import { render, screen } from "@testing-library/react";
import AnimesPage from "./AnimesPage";
import { Routes } from "react-router-dom";

describe("Given an Animes page component", () => {
  describe("When it´s rendered", () => {
    test("Then it should show an h2 with 'Anime' text inside", () => {
      const textH2 = "Anime";

      render(
        <Routes>
          <AnimesPage />
        </Routes>
      );

      const expectedText = screen.getByRole("h2", { name: textH2 });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
