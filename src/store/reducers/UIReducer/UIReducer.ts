import {
  ActionUI,
  TestingActionUI,
} from "../../../types/actionTypesUI/actionsUI";
import { IUIContext } from "../../contexts/UIContext/UIContext";

const UIReducer = (
  currentUI: IUIContext,
  action: ActionUI | TestingActionUI
): IUIContext => {
  let newUI: IUIContext;

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
