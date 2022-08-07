import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UIContext } from "../../store/contexts/UIContext/UIContext";
import AnimeCard from "./AnimeCard";

describe("Given an AnimeCard component", () => {
  const testArray = {
    mal_id: 111,
    images: {
      webp: {
        image_url: `images/testAnimeImage.png`,
      },
    },
    title: "Title test anime",
    type: "Type test anime",
    episodes: 222,
    duration: " 333",
    rating: "Rating test anime",
    score: 444,
    synopsis: "pasan cosas que cosas pasan",
    year: 555,
    genres: [],
  };
  const testButtonText = "Add";

  describe("When it recieves an anime information", () => {
    test("Then it should show an image with 'Title test anime' as alternative text", () => {
      render(<AnimeCard animeInfo={testArray} isDetailed={false} />);

      const testCard = screen.getByRole("img", {
        name: testArray.title,
      });

      expect(testCard).toBeInTheDocument();
    });

    test("Then is should show 'Title test anime' in a heading", () => {
      render(<AnimeCard animeInfo={testArray} isDetailed={false} />);

      const testCardHeading = screen.getByRole("heading", {
        name: testArray.title,
      });

      expect(testCardHeading).toHaveTextContent(testArray.title);
    });

    test("Then it should show an 'Add' button inside AnimeCard", () => {
      render(<AnimeCard animeInfo={testArray} isDetailed={false} />);

      const testCardButton = screen.getByRole("button", {
        name: testButtonText,
      });

      expect(testCardButton).toHaveTextContent(testButtonText);
    });
  });

  describe("When user click on 'Add' button", () => {
    test("Then it call the action assigned", () => {
      const mockActionOnClick = jest.fn();
      const initialUI = {
        isLoading: false,
        isModalShowing: false,
        message: "",
        type: false,
      };

      render(
        <UIContext.Provider
          value={{ ui: initialUI, UIdispatch: mockActionOnClick }}
        >
          <AnimeCard animeInfo={testArray} isDetailed={false} />
        </UIContext.Provider>
      );

      const button = screen.getByRole("button", {
        name: testButtonText,
      });
      userEvent.click(button);

      expect(mockActionOnClick).toBeCalled();
    });
  });
});
