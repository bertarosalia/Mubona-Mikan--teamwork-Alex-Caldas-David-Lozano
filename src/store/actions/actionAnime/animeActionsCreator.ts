import {
  LoadAnimeListAction,
  LoadLocalAnimeListAction,
  NextAnimePageAction,
  PreviousAnimePageAction,
} from "../../../types/actionTypesAnime/actionsAnime";
import { AnimeInfo, AnimeLocalData } from "../../../types/interfaces";

export const loadAnimeListActionCreator = (
  animeList: AnimeInfo
): LoadAnimeListAction => ({
  type: "loadAnimeList",
  payload: animeList,
});

export const nextAnimePageActionCreator = (
  isNextPage: boolean
): NextAnimePageAction => ({
  type: "nextAnimePage",
  payload: isNextPage,
});

export const previousAnimePageActionCreator = (): PreviousAnimePageAction => ({
  type: "previousAnimePage",
});

export const loadLocalAnimeListActionCreator = (
  animeLocalList: AnimeLocalData[]
): LoadLocalAnimeListAction => ({
  type: "loadLocalAnimeList",
  payload: animeLocalList,
});
