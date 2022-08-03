import { createContext } from "react";
import { UIState } from "../../../types/interfaces";

export interface IUIContext {
  ui: UIState;
}

export const UIContext = createContext<IUIContext>({
  ui: {
    isLoading: false,
  },
});
