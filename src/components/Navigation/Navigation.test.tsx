import { screen, render } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Given a Navigation component", () => {
  describe("When it´s rendered", () => {
    test("Then it should show a 'Animes' text inside the nav bar", () => {
      const animeNav = "Animes";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const expectedAnimeNav = screen.getByRole("link", {
        name: animeNav,
      });

      expect(expectedAnimeNav).toBeInTheDocument();
    });

    test("Then it should show a 'My list' text inside the nav bar", () => {
      const myListText = "My List";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const expectedMyListText = screen.getByRole("link", {
        name: myListText,
      });

      expect(expectedMyListText).toBeInTheDocument();
    });
  });
});
