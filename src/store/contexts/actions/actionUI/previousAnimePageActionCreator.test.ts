import { previousAnimePageCreator } from "../apiUrlActionCreator";

describe("Given an action creator previousAnimePageActionCreator", () => {
  describe("When it´s instantiated", () => {
    test("Then it should return an object with a type 'previousAnimePage'", () => {
      const expectedAction = { type: "previousAnimePage" };

      const previousAnimePageTest = previousAnimePageCreator();

      expect(previousAnimePageTest).toEqual(expectedAction);
    });
  });
});
