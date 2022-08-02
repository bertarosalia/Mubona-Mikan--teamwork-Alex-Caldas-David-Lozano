import { createContext } from "react";
import { animeInfo } from "../../types/interfaces";

interface IAnimeContext {
  animeInfo: animeInfo;
}
const AnimeContext = createContext<IAnimeContext>({
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

export default AnimeContext;
