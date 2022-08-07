import {
  ActionUI,
  ShowModalUI,
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
    case "showModal":
      newUI = {
        ...currentUI,
        isModalShowing: true,
        message: (action as ShowModalUI).payload.message,
        type: (action as ShowModalUI).payload.isPositive,
      };
      break;
    case "closeModal":
      newUI = {
        ...currentUI,
        isModalShowing: false,
      };
      break;
    case "showForm":
      newUI = { ...currentUI, isFormShowing: true };
      break;
    case "closeForm":
      newUI = { ...currentUI, isFormShowing: false };
      break;
    default:
      newUI = { ...currentUI };
      break;
  }

  return newUI;
};

export default UIReducer;
