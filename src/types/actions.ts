import { ActionType } from "./actionTypes";

export interface AnyAction {
  type: any;
}

export interface Action extends AnyAction {
  type: ActionType;
}

export interface TestingAction extends AnyAction {
  type: string;
}

export interface NextAnimePageAction extends Action {
  payload: boolean;
}
