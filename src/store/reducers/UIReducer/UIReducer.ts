import {
  ActionUI,
  TestingActionUI,
} from "../../../types/actionTypesUI/actionsUI";
import { UIState } from "../../../types/interfaces";

const UIReducer = (
  currentUI: UIState,
  action: ActionUI | TestingActionUI
): UIState => {
  let newUI: UIState;

  switch ((action as ActionUI).type) {
    case "showLoading":
      newUI = { ...currentUI, isLoading: true };
      break;
    case "closeLoading":
      newUI = { ...currentUI, isLoading: false };
      break;
    default:
      newUI = { ...currentUI };
      break;
  }

  return newUI;
};

export default UIReducer;
