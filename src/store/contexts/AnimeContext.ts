import { createContext } from "react";
import { AnimeInfo } from "../../types/interfaces";

export interface IAnimeContext {
  animeInfo: AnimeInfo;
}

export const AnimeContext = createContext<IAnimeContext>({
  animeInfo: {
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
});
