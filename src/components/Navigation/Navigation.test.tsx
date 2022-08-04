import { screen, render } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Given a Navigation component", () => {
  describe("When it´s rendered", () => {
    test("Then should show a 'Home' text inside the nav bar", () => {
      const navLinkText = "Home";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const expectedNavLinkText = screen.getByRole("link", {
        name: navLinkText,
      });

      expect(expectedNavLinkText).toBeInTheDocument();
    });

    test("Then it should show a 'Animes' text inside the nav bar", () => {
      const navLinkText = "Animes";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const expectedNavLinkText = screen.getByRole("link", {
        name: navLinkText,
      });

      expect(expectedNavLinkText).toBeInTheDocument();
    });

    test("Then it should show a 'My list' text inside the nav bar", () => {
      const navLinkText = "My List";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const expectedNavLinkText = screen.getByRole("link", {
        name: navLinkText,
      });

      expect(expectedNavLinkText).toBeInTheDocument();
    });
  });
});
