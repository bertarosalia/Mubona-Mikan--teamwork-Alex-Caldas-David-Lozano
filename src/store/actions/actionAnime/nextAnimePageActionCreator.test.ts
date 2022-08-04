import { nextAnimePageActionCreator } from "./animeActionsCreator";

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
