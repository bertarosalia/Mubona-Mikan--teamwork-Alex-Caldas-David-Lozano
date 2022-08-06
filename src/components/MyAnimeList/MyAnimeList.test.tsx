import { render, screen } from "@testing-library/react";
import MyAnimeList from "./MyAnimeList";

describe("Given a My Anime List component", () => {
  describe("When is rendered", () => {
    test("Then it should show 'My List' in heading 2", () => {
      const titleExpected = "My List";

      render(<MyAnimeList />);

      const headingMyAnimeList = screen.getByRole("heading", {
        name: titleExpected,
      });

      expect(headingMyAnimeList).toBeInTheDocument();
    });
  });
});
