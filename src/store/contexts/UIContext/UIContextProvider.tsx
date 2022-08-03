import { useReducer } from "react";
import UIReducer from "../../reducers/UIReducer/UIReducer";
import { UIContext } from "./UIContext";
import { UIState } from "../../../types/interfaces";

interface UIContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UIContextProvider = ({
  children,
}: UIContextProviderProps): JSX.Element => {
  const initialUI: UIState = {
    isLoading: false,
  };

  const [UIInfo, dispatchUI] = useReducer(UIReducer, initialUI);

  return (
    <UIContext.Provider value={{ ui: UIInfo, UIdispatch: dispatchUI }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
