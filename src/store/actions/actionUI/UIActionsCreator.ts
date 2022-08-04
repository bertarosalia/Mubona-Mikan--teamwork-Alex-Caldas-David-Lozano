import {
  CloseLoadingUI,
  ShowLoadingUI,
} from "../../../types/actionTypesUI/actionsUI";

export const showLoadingActionCreator = (): ShowLoadingUI => ({
  type: "showLoading",
});

export const closeLoadingActionCreator = (): CloseLoadingUI => ({
  type: "closeLoading",
});
