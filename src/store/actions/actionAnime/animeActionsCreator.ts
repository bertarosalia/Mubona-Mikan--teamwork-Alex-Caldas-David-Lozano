import { NextAnimePageAction } from "../../../types/actionTypesAnime/actionsAnime";

export const nextAnimePageActionCreator = (
  isNextPage: boolean
): NextAnimePageAction => ({
  type: "nextAnimePage",
  payload: isNextPage,
});
