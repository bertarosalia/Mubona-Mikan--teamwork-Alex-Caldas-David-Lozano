import {
  NextAnimePageAction,
  PreviousAnimePageAction,
} from "../../types/actions";

export const nextAnimePageActionCreator = (
  isNextPage: boolean
): NextAnimePageAction => ({
  type: "nextAnimePage",
  payload: isNextPage,
});

export const previousAnimePageCreator = (): PreviousAnimePageAction => ({
  type: "previousAnimePage",
});
