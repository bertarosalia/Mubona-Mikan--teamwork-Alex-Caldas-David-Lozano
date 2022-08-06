import { createContext, Dispatch } from "react";
import {
  ActionAnime,
  TestingActionAnime,
} from "../../../types/actionTypesAnime/actionsAnime";
import { AnimeInfo } from "../../../types/interfaces";

export interface IAnimeContext {
  animeListInfo: AnimeInfo;
  dispatchAnime: Dispatch<ActionAnime | TestingActionAnime>;
}

export const AnimeContext = createContext<IAnimeContext>({
  animeListInfo: {
    pagination: {
      has_next_page: false,
      current_page: 1,
      items: {
        count: 0,
        total: 666,
      },
    },
    data: [],
  },
  dispatchAnime: () => {},
});
