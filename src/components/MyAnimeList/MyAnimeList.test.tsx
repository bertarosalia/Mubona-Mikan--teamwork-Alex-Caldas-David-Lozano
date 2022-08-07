import { render, screen } from "@testing-library/react";
import {
  AnimeContext,
  IAnimeContext,
} from "../../store/contexts/AnimeContext/AnimeContext";
import MyAnimeList from "./MyAnimeList";

describe("Given a My Anime List component", () => {
  describe("When is rendered", () => {
    test("Then it should show a section on it", () => {
      render(<MyAnimeList />);

      const animeCardWrap = screen.getByRole("main");

      expect(animeCardWrap).toBeInTheDocument();
    });
  });
  describe("When it´s rendered with two anime Card on it", () => {
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
        data: [],
        animeLocalData: [
          {
            mal_id: 1,
            images: {
              webp: {
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
            id: 1,
          },
          {
            mal_id: 2,
            images: {
              webp: {
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
            id: 2,
          },
        ],
      },

      dispatchAnime: () => {},
    };

    test("Then it should show two anime cards", () => {
      render(
        <AnimeContext.Provider value={animeInfoList}>
          <MyAnimeList />
        </AnimeContext.Provider>
      );

      const firstAnime = screen.getAllByRole("article");

      expect(firstAnime).toHaveLength(
        animeInfoList.animeListInfo.animeLocalData.length
      );
    });
  });
});
