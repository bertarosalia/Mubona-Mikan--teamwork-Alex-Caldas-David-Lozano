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
  const expectedLocalResponse = {
    animeLocalData: [
      {
        testSuccess: "Great",
      },
    ],
    data: [],
    pagination: {
      current_page: 0,
      has_next_page: false,
      items: { count: 0, total: 666 },
    },
  };

  describe("When it's instantiated with JikanAPI and url with param 'page=0'", () => {
    test("The anime info must return '{pruebaguay: 'Bien!}'", async () => {
      const apiCorrectURL = `${process.env.REACT_APP_API_URL as string}?page=0`;
      const expectedResponse = { animeLocalData: [], testSuccess: "Great" };

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });
      result.current.jikanAPI(apiCorrectURL);

      await waitFor(() => {
        expect(result.current.animeListInfo).toEqual(expectedResponse);
      });
    });
  });

  describe("When it's instantiated with JikanAPI url and param 'page=aasadasda'", () => {
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
  describe("When it's instantiated with getApiLocal with local url", () => {
    test("The anime info must contain in return {testSuccess: 'Great'}", async () => {
      const apiCorrectURL = process.env.REACT_APP_LOCAL_API_URL as string;

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });
      result.current.getApiLocal(apiCorrectURL);

      await waitFor(() => {
        expect(result.current.animeListInfo).toEqual(expectedLocalResponse);
      });
    });
  });

  describe("When it's instantiated with getApiLocal and local url with '/dsa'", () => {
    test("Then should call the mocked dispatch", async () => {
      const apiLocalURL = `${
        process.env.REACT_APP_LOCAL_API_URL as string
      }/dsa`;
      const mockDispatch = jest.fn();

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });
      result.current.getApiLocal(apiLocalURL, mockDispatch);

      await waitFor(() => {
        expect(mockDispatch).toBeCalled();
      });
    });
  });

  describe("When it's instantiated with postLocalApi with local url", () => {
    test("The anime info must contain in return {testSuccess: 'Great'}", async () => {
      const apiCorrectURL = process.env.REACT_APP_LOCAL_API_URL as string;

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });
      result.current.postLocalAPI(apiCorrectURL, {});

      await waitFor(() => {
        expect(result.current.animeListInfo).toEqual(expectedLocalResponse);
      });
    });
  });

  describe("When it's instantiated with postLocalApi and local url with '/dsa'", () => {
    test("Then should call the mocked dispatch", async () => {
      const apiLocalURL = `${
        process.env.REACT_APP_LOCAL_API_URL as string
      }/dsa`;
      const mockDispatch = jest.fn();

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });
      result.current.postLocalAPI(apiLocalURL, {}, mockDispatch);

      await waitFor(() => {
        expect(mockDispatch).toBeCalled();
      });
    });
  });

  describe("When it's instantiated with deleteLocalApi with local url and id '1'", () => {
    test("The anime info must contain in return {testSuccess: 'Great'}", async () => {
      const apiCorrectURL = process.env.REACT_APP_LOCAL_API_URL as string;

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });
      result.current.deleteLocalAPI(apiCorrectURL, 1);

      await waitFor(() => {
        expect(result.current.animeListInfo).toEqual(expectedLocalResponse);
      });
    });
  });

  describe("When it's instantiated with deleteLocalApi and local url with id '7'", () => {
    test("Then should call the mocked dispatch", async () => {
      const apiLocalURL = `${process.env.REACT_APP_LOCAL_API_URL as string}`;
      const mockDispatch = jest.fn();

      const { result } = renderHook(useAPI, {
        wrapper: testAnimeWrapper,
      });
      result.current.deleteLocalAPI(apiLocalURL, 7, mockDispatch);

      await waitFor(() => {
        expect(mockDispatch).toBeCalled();
      });
    });
  });
});
