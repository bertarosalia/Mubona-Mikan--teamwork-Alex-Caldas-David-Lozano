import { createContext, Dispatch } from "react";
import { Action, TestingAction } from "../../../types/actions";
import { AnimeInfo } from "../../../types/interfaces";

export interface IAnimeContext {
  animeListInfo: AnimeInfo;
  dispatch: Dispatch<Action | TestingAction>;
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
  dispatch: () => {},
});
