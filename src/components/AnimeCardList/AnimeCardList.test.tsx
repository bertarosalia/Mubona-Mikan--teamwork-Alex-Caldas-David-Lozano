import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  AnimeContext,
  IAnimeContext,
} from "../../store/contexts/AnimeContext/AnimeContext";
import AnimeContextProvider from "../../store/contexts/AnimeContext/AnimeContextProvider";
import AnimeCardList from "./AnimeCardList";

describe("Given a AnimeCardList", () => {
  const mockFunction = jest.fn();

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
        },
      ],
    },
    dispatchAnime: mockFunction,
  };

  describe("When it's rendered", () => {
    test("Then should show 'Anime' in heading level 2", () => {
      const title = "Anime";

      render(
        <AnimeContextProvider>
          <AnimeCardList />
        </AnimeContextProvider>
      );

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
      render(
        <AnimeContext.Provider value={animeInfoList}>
          <AnimeCardList />
        </AnimeContext.Provider>
      );

      const firstAnime = screen.getAllByRole("article");

      expect(firstAnime).toHaveLength(animeInfoList.animeListInfo.data.length);
    });
  });

  describe("When Next button is clicked", () => {
    test("Then it should call the function on Next", () => {
      render(
        <AnimeContext.Provider value={animeInfoList}>
          <AnimeCardList />
        </AnimeContext.Provider>
      );

      const button = screen.getByRole("button", {
        name: "Next",
      });
      userEvent.click(button);

      expect(mockFunction).toHaveBeenCalled();
    });
  });

  describe("When Previous buttons is clicked", () => {
    test("Then it should call the function on Previous", () => {
      render(
        <AnimeContext.Provider value={animeInfoList}>
          <AnimeCardList />
        </AnimeContext.Provider>
      );

      const button = screen.getByRole("button", {
        name: "Previous",
      });
      userEvent.click(button);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
