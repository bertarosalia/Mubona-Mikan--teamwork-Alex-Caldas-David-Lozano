import {
  ShowLoadingUI,
  CloseLoadingUI,
  ShowModalUI,
  CloseModalUI,
} from "../../../types/actionTypesUI/actionsUI";

export const showLoadingActionCreator = (): ShowLoadingUI => ({
  type: "showLoading",
});

export const closeLoadingActionCreator = (): CloseLoadingUI => ({
  type: "closeLoading",
});

export const showFormActionCreator = (): ShowLoadingUI => ({
  type: "showForm",
});

export const closeFormActionCreator = (): CloseLoadingUI => ({
  type: "closeForm",
});

export const showModalActionCreator = (
  isPositive: boolean,
  message: string
): ShowModalUI => ({
  type: "showModal",
  payload: { isPositive: isPositive, message: message },
});

export const closeModalActionCreator = (): CloseModalUI => ({
  type: "closeModal",
});
