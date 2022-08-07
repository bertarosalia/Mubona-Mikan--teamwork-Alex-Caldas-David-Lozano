import UIReducer from "./UIReducer";

describe("Given the UIReducer function", () => {
  describe("When it's instantiated with an object with property isLoading 'false' and showLoading Action", () => {
    test("Then should return an object with isLoading 'true'", () => {
      const loadingState = {
        isLoading: false,
        isModalShowing: false,
        isFormShowing: false,
        message: "",
        type: false,
      };
      const showLoadingAction = {
        type: "showLoading",
      };
      const newloadingState = {
        isLoading: true,
        isModalShowing: false,
        isFormShowing: false,
        message: "",
        type: false,
      };

      const showLoadingCreatonAction = UIReducer(
        loadingState,
        showLoadingAction
      );

      expect(showLoadingCreatonAction).toEqual(newloadingState);
    });
  });

  describe("When it's instantiated with an object with property isLoading 'true' and closeLoading Action", () => {
    test("Then should return an object with isLoading 'false'", () => {
      const loadingState = {
        isLoading: true,
        isModalShowing: false,
        isFormShowing: false,
        message: "",
        type: false,
      };
      const showLoadingAction = {
        type: "closeLoading",
      };
      const newloadingState = {
        isLoading: false,
        isModalShowing: false,
        isFormShowing: false,
        message: "",
        type: false,
      };

      const showLoadingCreatonAction = UIReducer(
        loadingState,
        showLoadingAction
      );

      expect(showLoadingCreatonAction).toEqual(newloadingState);
    });
  });

  describe("When it's instantiated with an UIState and 'showModal' Action", () => {
    test("Then should return an object with isModalShowing 'true',", () => {
      const UIState = {
        isLoading: false,
        isModalShowing: false,
        isFormShowing: false,
        message: "",
        type: false,
      };
      const showModalAction = {
        type: "showModal",
        payload: {
          isPositive: true,
          message: "Hola",
        },
      };
      const newUIState = {
        isLoading: false,
        isModalShowing: true,
        isFormShowing: false,
        message: "Hola",
        type: true,
      };

      const showModalCreatonAction = UIReducer(UIState, showModalAction);

      expect(showModalCreatonAction).toEqual(newUIState);
    });
  });

  describe("When it's instantiated with an UIState and 'closeModal' Action", () => {
    test("Then should return an object with isModalShowing 'true',", () => {
      const UIState = {
        isLoading: false,
        isModalShowing: true,
        isFormShowing: false,
        message: "Hola",
        type: false,
      };
      const closeModalAction = {
        type: "closeModal",
      };
      const newUIState = {
        isLoading: false,
        isModalShowing: false,
        isFormShowing: false,
        message: "Hola",
        type: false,
      };

      const closeModalCreatonAction = UIReducer(UIState, closeModalAction);

      expect(closeModalCreatonAction).toEqual(newUIState);
    });
  });

  describe("When it's instantiated with an UIState and 'showForm' Action", () => {
    test("Then should return an object with isFormShowing 'true',", () => {
      const UIState = {
        isLoading: false,
        isModalShowing: false,
        isFormShowing: false,
        message: "Hola",
        type: false,
      };
      const showFormAction = {
        type: "showForm",
      };
      const newUIState = {
        isLoading: false,
        isModalShowing: false,
        isFormShowing: true,
        message: "Hola",
        type: false,
      };

      const showFormCreatonAction = UIReducer(UIState, showFormAction);

      expect(showFormCreatonAction).toEqual(newUIState);
    });
  });

  describe("When it's instantiated with an UIState and 'closeForm' Action", () => {
    test("Then should return an object with isFormShowing 'false',", () => {
      const UIState = {
        isLoading: false,
        isModalShowing: false,
        isFormShowing: true,
        message: "Hola",
        type: false,
      };
      const closeFormAction = {
        type: "closeForm",
      };
      const newUIState = {
        isLoading: false,
        isModalShowing: false,
        isFormShowing: false,
        message: "Hola",
        type: false,
      };

      const closeFormCreatonAction = UIReducer(UIState, closeFormAction);

      expect(closeFormCreatonAction).toEqual(newUIState);
    });
  });

  describe("When it's instantiated with an object with property isLoading 'true' and 'Testing' Action", () => {
    test("Then should return an object with isLoading 'true'", () => {
      const loadingState = {
        isLoading: true,
        isModalShowing: false,
        isFormShowing: false,
        message: "",
        type: false,
      };
      const showLoadingAction = {
        type: "Testing",
      };
      const newloadingState = {
        isLoading: true,
        isModalShowing: false,
        isFormShowing: false,
        message: "",
        type: false,
      };

      const showLoadingCreatonAction = UIReducer(
        loadingState,
        showLoadingAction
      );

      expect(showLoadingCreatonAction).toEqual(newloadingState);
    });
  });
});
