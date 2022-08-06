import { loadAnimeListActionCreator } from "./animeActionsCreator";

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
