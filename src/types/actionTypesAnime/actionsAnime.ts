import { AnimeData, AnimeInfo, AnimeLocalData } from "../interfaces";
import { ActionTypeAnime } from "./actionsTypesAnime";

export interface AnyActionAnime {
  type: any;
}

export interface ActionAnime extends AnyActionAnime {
  type: ActionTypeAnime;
}

export interface TestingActionAnime extends AnyActionAnime {
  type: string;
}

export interface LoadAnimeListAction extends ActionAnime {
  payload: AnimeInfo;
}

export interface NextAnimePageAction extends ActionAnime {
  payload: boolean;
}
export interface PreviousAnimePageAction extends ActionAnime {}

export interface LoadLocalAnimeListAction extends ActionAnime {
  payload: AnimeLocalData[];
}
