import { IUIContext, UIContext } from "./UIContext";

interface UIContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UIContextProvider = ({
  children,
}: UIContextProviderProps): JSX.Element => {
  const initialUI: IUIContext = {
    ui: {
      isLoading: false,
    },
  };

  return <UIContext.Provider value={initialUI}>{children}</UIContext.Provider>;
};

export default UIContextProvider;
