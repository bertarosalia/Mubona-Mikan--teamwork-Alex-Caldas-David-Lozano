import { closeLoadingActionCreator } from "./UIActionsCreator";

describe("Given the showLoadingActionCreator function", () => {
  describe("When it's invoqued", () => {
    test("Then should return an action with property type with 'showLoading'", () => {
      const expectedAction = { type: "closeLoading" };

      const closeLoadingAction = closeLoadingActionCreator();

      expect(closeLoadingAction).toEqual(expectedAction);
    });
  });
});
