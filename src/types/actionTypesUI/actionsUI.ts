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
