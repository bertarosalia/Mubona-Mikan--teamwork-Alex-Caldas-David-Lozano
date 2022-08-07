import { ActionTypeUI } from "./actionTypesUI";

export interface AnyActionUI {
  type: any;
}

export interface ActionUI extends AnyActionUI {
  type: ActionTypeUI;
}

export interface TestingActionUI extends AnyActionUI {
  type: string;
}

export interface ShowLoadingUI extends ActionUI {}

export interface CloseLoadingUI extends ActionUI {}

export interface ShowFormUI extends ActionUI {}

export interface CloseFormUI extends ActionUI {}

export interface ShowModalUI extends ActionUI {
  payload: {
    isPositive: boolean;
    message: string;
  };
}

export interface CloseModalUI extends ActionUI {}
