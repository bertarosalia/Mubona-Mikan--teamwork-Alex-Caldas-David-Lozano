import {
  ActionAnime,
  LoadAnimeListAction,
  LoadLocalAnimeListAction,
  TestingActionAnime,
} from "../../../types/actionTypesAnime/actionsAnime";
import { AnimeInfo } from "../../../types/interfaces";

const animeReducer = (
  currentAnimeInfo: AnimeInfo,
  action: ActionAnime | TestingActionAnime
) => {
  let newAnimeInfo: AnimeInfo;
  const {
    pagination: { current_page },
  } = currentAnimeInfo;

  switch ((action as ActionAnime).type) {
    case "loadAnimeList":
      newAnimeInfo = { ...(action as LoadAnimeListAction).payload };
      break;
    case "nextAnimePage":
      newAnimeInfo = {
        ...currentAnimeInfo,
        pagination: {
          ...currentAnimeInfo.pagination,
          current_page: current_page + 1,
        },
      };
      break;
    case "previousAnimePage":
      newAnimeInfo = {
        ...currentAnimeInfo,
        pagination: {
          ...currentAnimeInfo.pagination,
          current_page: current_page - 1,
        },
      };
      break;
    case "loadLocalAnimeList":
      newAnimeInfo = {
        ...currentAnimeInfo,
        animeLocalData: [...(action as LoadLocalAnimeListAction).payload],
      };
      break;
    default:
      newAnimeInfo = { ...currentAnimeInfo };
  }
  return newAnimeInfo;
};

export default animeReducer;
