import { renderHook, waitFor } from "@testing-library/react";

import AnimeContextProvider from "../store/contexts/AnimeContext/AnimeContextProvider";

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
      const expectedResponse = { animeLocalData: [], pruebaguay: "Bien!" };

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });

      result.current.jikanAPI(apiCorrectURL);

      await waitFor(() => {
        expect(result.current.animeListInfo).toEqual(expectedResponse);
      });
    });
  });

  describe("When it's instantiated with url and param 'page=aasadasda'", () => {
    test("Then should call the mocked dispatch", async () => {
      const apiURL = `${process.env.REACT_APP_API_URL as string}?page=asadasda`;
      const mockDispatch = jest.fn();

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });
      result.current.jikanAPI(apiURL, mockDispatch);

      await waitFor(() => {
        expect(mockDispatch).toBeCalled();
      });
    });
  });
});
