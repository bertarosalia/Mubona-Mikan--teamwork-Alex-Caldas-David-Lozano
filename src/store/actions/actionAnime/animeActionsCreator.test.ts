import { loadAnimeListActionCreator } from "./animeActionsCreator";
import { nextAnimePageActionCreator } from "./animeActionsCreator";
import { previousAnimePageActionCreator } from "./animeActionsCreator";

describe("Given the loadAnimeListActionCreator", () => {
  describe("When it's instantiated with an anime list", () => {
    test("Then it should return an action with type 'loadAnimeList' and payload with the anime list", () => {});

    const animeList = {
      pagination: {
        has_next_page: true,
        current_page: 2,
        items: {
          count: 1,
          total: 233,
        },
      },
      data: [],
      animeLocalData: [],
    };
    const expectedAction = {
      type: "loadAnimeList",
      payload: animeList,
    };

    const loadAnimeListAction = loadAnimeListActionCreator(animeList);

    expect(loadAnimeListAction).toEqual(expectedAction);
  });
});

describe("Given an action creator nextAnimePageActionCreator", () => {
  describe("When it´s instatiated with a true value", () => {
    test("Then it should return an object with payload property true", () => {
      const isNextPage = true;
      const expectedValue = { type: "nextAnimePage", payload: true };

      const nextAnimePageActionCreatorTest =
        nextAnimePageActionCreator(isNextPage);

      expect(nextAnimePageActionCreatorTest).toEqual(expectedValue);
    });
  });

  describe("When it´s instantiated with a false value", () => {
    test("Then it should return an object with payload property false", () => {
      const isNextPage = false;
      const expectedValue = { type: "nextAnimePage", payload: false };

      const nextAnimePageActionCreatorTest =
        nextAnimePageActionCreator(isNextPage);

      expect(nextAnimePageActionCreatorTest).toEqual(expectedValue);
    });
  });
});

describe("Given an action creator previousAnimePageActionCreator", () => {
  describe("When it´s instantiated", () => {
    test("Then it should return an object with a type 'previousAnimePage'", () => {
      const expectedAction = { type: "previousAnimePage" };

      const previousAnimePageTest = previousAnimePageActionCreator();

      expect(previousAnimePageTest).toEqual(expectedAction);
    });
  });
});
