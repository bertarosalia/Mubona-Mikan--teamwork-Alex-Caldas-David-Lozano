import { NextAnimePageAction } from "../../../types/actions";

export const nextAnimePageActionCreator = (
  isNextPage: boolean
): NextAnimePageAction => ({
  type: "nextAnimePage",
  payload: isNextPage
});
