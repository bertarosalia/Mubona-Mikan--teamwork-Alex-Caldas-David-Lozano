import {
  ActionAnime,
  TestingActionAnime,
} from "../../../types/actionTypesAnime/actionsAnime";
import { AnimeInfo } from "../../../types/interfaces";

const animeReducer = (
  currentAnimeInfo: AnimeInfo,
  action: ActionAnime | TestingActionAnime
) => {
  let newAnimeInfo: AnimeInfo;

  switch ((action as ActionAnime).type) {
    case "nextAnimePage":
      newAnimeInfo = {
        ...currentAnimeInfo,
        pagination: { ...currentAnimeInfo.pagination, current_page: 2 },
      };
      break;
    default:
      newAnimeInfo = { ...currentAnimeInfo };
  }
  return newAnimeInfo;
};

export default animeReducer;
