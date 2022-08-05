import { renderHook, waitFor } from "@testing-library/react";
import AnimeContextProvider from "../store/contexts/animeContext/AnimeContextProvider";
import useAPI from "./useAPI";

interface TestAnimeWrapperProps {
  children: JSX.Element;
}

const testAnimeWrapper = ({ children }: TestAnimeWrapperProps) => (
  <AnimeContextProvider>{children}</AnimeContextProvider>
);

describe("Given the useApi hook", () => {
  describe("When it's instantiated with url with param 'page=0'", () => {
    test("The anime info must return '{pruebaguay: 'Bien!}'", async () => {
      const apiCorrectURL = `${
        process.env.REACT_APP_API_URL as string
      }?page=0&limit=12`;
      const expectedResponse = { pruebaguay: "Bien!" };

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });

      result.current.jikanAPI(apiCorrectURL);

      await waitFor(() => {
        expect(result.current.animeListInfo).toEqual(expectedResponse);
      });
    });
  });

  describe("When it's instantiated with url with param 'page=a'", () => {
    test("The anime info must return '{pruebaguay: 'Error!}'", async () => {
      const apiURL = `${
        process.env.REACT_APP_API_URL as string
      }?page=a&limit=12`;
      const expectedResponse = { pruebaguay: "Error!" };

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });

      result.current.jikanAPI(apiURL);

      await waitFor(() => {
        expect(result.current.animeListInfo).toEqual(expectedResponse);
      });
    });
  });
});
