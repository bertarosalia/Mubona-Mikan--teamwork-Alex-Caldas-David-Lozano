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
    test("The anime info returned have a current page '1'", async () => {
      const expectedCurrentPageFinal = 1;

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });

      result.current.jikanAPI();

      await waitFor(() => {
        expect(result.current.animeListInfo).toBe(expectedCurrentPageFinal);
      });
    });
  });
});
