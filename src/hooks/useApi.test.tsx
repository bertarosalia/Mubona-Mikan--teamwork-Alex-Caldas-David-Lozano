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
      const apiCorrectURL = `${process.env.REACT_APP_API_URL as string}?page=0`;
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
    test("Then should call the mocked dispatch", async () => {
      const apiURL = `${process.env.REACT_APP_API_URL as string}?page=asadasda`;
      const expectedTDMResponse = {
        pagination: {
          has_next_page: false,
          current_page: 0,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
      };

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });

      result.current.jikanAPI(apiURL);

      await waitFor(() => {
        expect(result.current.animeListInfo).toEqual(expectedTDMResponse);
      });
    });
  });
});
