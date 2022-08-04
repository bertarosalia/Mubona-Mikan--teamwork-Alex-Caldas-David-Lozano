import { closeModalActionCreator } from "./UIActionsCreator";

describe("Given the closeModalActionCreator function", () => {
  describe("When it's instantiated", () => {
    test("Then should return an action with property type with 'closeModal'", () => {
      const expectedAction = { type: "closeModal" };

      const closeLoadingAction = closeModalActionCreator();

      expect(closeLoadingAction).toEqual(expectedAction);
    });
  });
});
