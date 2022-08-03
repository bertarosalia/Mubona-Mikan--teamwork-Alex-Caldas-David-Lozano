import { render, screen } from "@testing-library/react";
import { AnimeContext, IAnimeContext } from "../../store/contexts/AnimeContext";
import AnimeCardList from "./AnimeCardList";

describe("Given a AnimeCardList", () => {
  describe("When it's rendered", () => {
    test("Then should show 'Anime' in heading level 2", () => {
      const title = "Anime";

      render(<AnimeCardList />);

      const heading = screen.getByRole("heading", {
        name: title,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then should show two buttons", () => {
      const numberOfButtons = 2;

      render(<AnimeCardList />);

      const heading = screen.getAllByRole("button");

      expect(heading).toHaveLength(numberOfButtons);
    });
  });
  describe("When it`s rendered with a list with two animes", () => {
    test("Then should show two AnimeCards", () => {
      const animeInfoList: IAnimeContext = {
        animeListInfo: {
          pagination: {
            has_next_page: false,
            current_page: -1,
            items: {
              count: 0,
              total: 666,
            },
          },
          data: [
            {
              mal_id: 1,
              images: {
                jpg: {
                  image_url: "",
                },
              },
              title: "",
              type: "",
              episodes: 1,
              duration: "",
              rating: "",
              score: 1,
              synopsis: "",
              year: 1,
              genres: [],
            },
            {
              mal_id: 2,
              images: {
                jpg: {
                  image_url: "",
                },
              },
              title: "",
              type: "",
              episodes: 1,
              duration: "",
              rating: "",
              score: 1,
              synopsis: "",
              year: 1,
              genres: [],
            },
          ],
        },
        dispatch: () => {},
      };

      const animesCardGenerated = 2;

      render(
        <AnimeContext.Provider value={animeInfoList}>
          <AnimeCardList />
        </AnimeContext.Provider>
      );

      const firstAnime = screen.getAllByRole("article");

      expect(firstAnime).toHaveLength(animesCardGenerated);
    });
  });
});
