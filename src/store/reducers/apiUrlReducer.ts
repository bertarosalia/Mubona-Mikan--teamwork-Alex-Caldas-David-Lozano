import {
  Action,
  NextAnimePageAction,
  TestingAction,
} from "../../types/actions";

const apiUrlReducer = (
  currentNumberPage: number,
  action: Action | TestingAction
): number => {
  let newNumberPage: number;

  switch ((action as Action).type) {
    case "nextAnimePage":
      newNumberPage = (action as NextAnimePageAction).payload
        ? currentNumberPage + 1
        : currentNumberPage;
      break;

    case "previousAnimePage":
      newNumberPage =
        currentNumberPage === 1 ? currentNumberPage : currentNumberPage - 1;
      break;
    default:
      newNumberPage = currentNumberPage;
  }
  return newNumberPage;
};

export default apiUrlReducer;
