import { AnimeLocalData } from "../../../types/interfaces";
import animeReducer from "./animeReducer";

describe("Given the animeReducer function", () => {
  const previousAnimeInfoList = {
    pagination: {
      has_next_page: false,
      current_page: -1,
      items: {
        count: 0,
        total: 666,
      },
    },
    data: [],
    animeLocalData: [],
  };

  describe("When it's instantiated with an animeInfoList and action 'loadAnimeList' and payload with another animeInfoList", () => {
    test("Then should return a new anime info list same equal than payload", () => {
      const actionType = "loadAnimeList";
      const actionPayload = {
        pagination: {
          has_next_page: true,
          current_page: 2,
          items: {
            count: 1,
            total: 233,
          },
        },
        data: [],
      };

      const expectednewAnimeInfoList = {
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

      const action = { type: actionType, payload: actionPayload };

      const newAnimeInfoList = animeReducer(previousAnimeInfoList, action);

      expect(newAnimeInfoList).toEqual(expectednewAnimeInfoList);
    });
  });

  describe("When it's instantiated with an animeInfoList and action 'nextAnimeList' and payload with another animeInfoList", () => {
    test("Then should return a new anime info list same equal than payload", () => {
      const actionType = "nextAnimePage";
      const previousAnimeInfoList = {
        pagination: {
          has_next_page: true,
          current_page: 3,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
        animeLocalData: [],
      };

      const actionPayload = {
        pagination: {
          has_next_page: true,
          current_page: 4,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
      };

      const expectednewAnimeInfoList = {
        pagination: {
          has_next_page: true,
          current_page: 4,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
        animeLocalData: [],
      };

      const action = { type: actionType, payload: actionPayload };

      const newAnimeInfoList = animeReducer(previousAnimeInfoList, action);

      expect(newAnimeInfoList).toEqual(expectednewAnimeInfoList);
    });
  });

  describe("When it's instantiated with an animeInfoList and action 'previousAnimeList' and payload with another animeInfoList", () => {
    test("Then should return a new anime info list same equal than payload", () => {
      const actionType = "previousAnimePage";
      const previousAnimeInfoList = {
        pagination: {
          has_next_page: true,
          current_page: 5,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
        animeLocalData: [],
      };

      const actionPayload = {
        pagination: {
          has_next_page: true,
          current_page: 4,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
      };

      const expectednewAnimeInfoList = {
        pagination: {
          has_next_page: true,
          current_page: 4,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
        animeLocalData: [],
      };

      const action = { type: actionType, payload: actionPayload };

      const newAnimeInfoList = animeReducer(previousAnimeInfoList, action);

      expect(newAnimeInfoList).toEqual(expectednewAnimeInfoList);
    });
  });

  describe("When it's instantiated with an animeInfoList and action 'patatasfritas' and payload with another animeInfoList", () => {
    test("Then should return a new anime info list same equal than payload", () => {
      const actionType = "patatasfritas";
      const previousAnimeInfoList = {
        pagination: {
          has_next_page: true,
          current_page: 3,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
        animeLocalData: [],
      };

      const actionPayload = {
        pagination: {
          has_next_page: true,
          current_page: 4,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
      };

      const expectednewAnimeInfoList = {
        pagination: {
          has_next_page: true,
          current_page: 3,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
        animeLocalData: [],
      };

      const action = { type: actionType, payload: actionPayload };

      const newAnimeInfoList = animeReducer(previousAnimeInfoList, action);

      expect(newAnimeInfoList).toEqual(expectednewAnimeInfoList);
    });
  });
  describe("When it's instantiated with an animeLocalList and action 'loadLocalAnimeList' and payload with another animeInfoList", () => {
    test("Then should return an new anime local list same equal than payload", () => {
      const actionType = "loadLocalAnimeList";
      const actionPayload: AnimeLocalData[] = [
        {
          title: "",
          duration: "",
          episodes: 0,
          genres: [],
          id: 1,
          images: { webp: { image_url: "" } },
          mal_id: 2,
          rating: "",
          score: 0,
          synopsis: "",
          type: "",
          year: 0,
        },
      ];

      const expectednewAnimeLocalData = {
        pagination: {
          has_next_page: false,
          current_page: -1,
          items: {
            count: 0,
            total: 666,
          },
        },
        data: [],
        animeLocalData: [
          {
            title: "",
            duration: "",
            episodes: 0,
            genres: [],
            id: 1,
            images: { webp: { image_url: "" } },
            mal_id: 2,
            rating: "",
            score: 0,
            synopsis: "",
            type: "",
            year: 0,
          },
        ],
      };

      const action = { type: actionType, payload: actionPayload };

      const newAnimeLocalData = animeReducer(previousAnimeInfoList, action);

      expect(newAnimeLocalData).toEqual(expectednewAnimeLocalData);
    });
  });
});
