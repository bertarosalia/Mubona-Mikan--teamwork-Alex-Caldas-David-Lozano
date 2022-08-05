import { renderHook, waitFor } from "@testing-library/react";
import AnimeContextProvider from "../store/contexts/animeContext/AnimeContextProvider";
import useAPI from "./useAPI";

interface testAnimeWrapperProps {
  children: JSX.Element;
}

const testAnimeWrapper = ({ children }: testAnimeWrapperProps) => (
  <AnimeContextProvider>{children}</AnimeContextProvider>
);

describe("Given the useApi hook", () => {
  describe("When it's instantiated first time", () => {
    test("The anime info must return '{pruebaguay: 'Bien!}'", async () => {
      const expectedResponse = { pruebaguay: "Bien!" };

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });

      result.current.jikanAPI();

      await waitFor(() => {
        expect(result.current.animeListInfo).toEqual(expectedResponse);
      });
    });
  });
});
