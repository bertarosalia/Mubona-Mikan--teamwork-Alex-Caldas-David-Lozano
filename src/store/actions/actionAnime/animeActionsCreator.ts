import {
  loadAnimeListAction,
  NextAnimePageAction,
} from "../../../types/actionTypesAnime/actionsAnime";
import { AnimeInfo } from "../../../types/interfaces";

export const loadAnimeListActionCreator = (
  animeList: AnimeInfo
): loadAnimeListAction => ({
  type: "loadAnimeList",
  payload: animeList,
});

export const nextAnimePageActionCreator = (
  isNextPage: boolean
): NextAnimePageAction => ({
  type: "nextAnimePage",
  payload: isNextPage,
});
