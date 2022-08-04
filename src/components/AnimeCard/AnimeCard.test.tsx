import { render, screen } from "@testing-library/react";
import AnimeCard from "./AnimeCard";

describe("Given an AnimeCard component", () => {
  describe("When it recieves props from animeInfo", () => {
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

    test("Then it should return an image with props title as alternative text", () => {
      render(<AnimeCard animeInfo={testArray} />);

      const testCard = screen.getByRole("img", {
        name: testArray.title,
      });

      expect(testCard).toBeInTheDocument();
    });

    test("Then title given by props must be h3", () => {
      render(<AnimeCard animeInfo={testArray} />);

      const testCardHeading = screen.getByRole("heading", {
        name: testArray.title,
      });

      expect(testCardHeading).toHaveTextContent(testArray.title);
    });

    test("Then it should always show an 'Add' button inside AnimeCard", () => {
      const testButtonText = "Add";
      render(<AnimeCard animeInfo={testArray} />);

      const testCardButton = screen.getByRole("button", {
        name: testButtonText,
      });

      expect(testCardButton).toHaveTextContent(testButtonText);
    });
  });
});
