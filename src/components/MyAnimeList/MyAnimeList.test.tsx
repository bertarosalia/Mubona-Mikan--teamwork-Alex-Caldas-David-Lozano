import { render, screen } from "@testing-library/react";
import MyAnimeList from "./MyAnimeList";

describe("Given a My Anime List component", () => {
  describe("When is rendered", () => {
    test("Then it should show a section on it", () => {
      render(<MyAnimeList />);

      const animeCardWrap = screen.getAllByRole("main");

      expect(animeCardWrap).toHaveLength(1);
    });
  });
});
