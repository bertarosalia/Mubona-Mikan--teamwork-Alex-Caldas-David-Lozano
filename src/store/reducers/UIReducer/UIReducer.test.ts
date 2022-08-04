import UIReducer from "./UIReducer";

describe("Given the UIReducer function", () => {
  describe("When it's instantiated with an object with property isLoading 'false' and showLoading Action", () => {
    test("Then should return an object with isLoading 'true'", () => {
      const loadingState = {
        isLoading: false,
        isModalShowing: false,
        message: "",
        type: false,
      };
      const showLoadingAction = {
        type: "showLoading",
      };
      const newloadingState = {
        isLoading: true,
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
        message: "",
        type: false,
      };
      const showLoadingAction = {
        type: "closeLoading",
      };
      const newloadingState = {
        isLoading: false,
      };

      const showLoadingCreatonAction = UIReducer(
        loadingState,
        showLoadingAction
      );

      expect(showLoadingCreatonAction).toEqual(newloadingState);
    });
  });

  describe("When it's instantiated with an object with property isLoading 'true' and 'Testing' Action", () => {
    test("Then should return an object with isLoading 'true'", () => {
      const loadingState = {
        isLoading: true,
        isModalShowing: false,
        message: "",
        type: false,
      };
      const showLoadingAction = {
        type: "Testing",
      };
      const newloadingState = {
        isLoading: true,
      };

      const showLoadingCreatonAction = UIReducer(
        loadingState,
        showLoadingAction
      );

      expect(showLoadingCreatonAction).toEqual(newloadingState);
    });
  });
});
