import { showLoadingActionCreator } from "./UIActionsCreator";

describe("Given the showLoadingActionCreator function", () => {
  describe("When it's invoked", () => {
    test("Then it should return an action with property type with 'showLoading'", () => {
      const expectedAction = { type: "showLoading" };

      const showLoadingAction = showLoadingActionCreator();

      expect(showLoadingAction).toEqual(expectedAction);
    });
  });
});
