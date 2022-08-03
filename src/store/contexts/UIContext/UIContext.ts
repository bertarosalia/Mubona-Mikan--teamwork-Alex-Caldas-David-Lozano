import { createContext, Dispatch } from "react";
import { UIState } from "../../../types/interfaces";
import { ActionUI } from "../../../types/actionTypesUI/actionsUI";
export interface IUIContext {
  ui: UIState;
  UIdispatch: Dispatch<ActionUI>;
}

export const UIContext = createContext<IUIContext>({
  ui: { isLoading: false },
  UIdispatch: () => {},
});
