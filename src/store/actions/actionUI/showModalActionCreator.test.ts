import { showModalActionCreator } from "./UIActionsCreator";

describe("Given the showLoadingActionCreator function", () => {
  describe("When it's invoqued", () => {
    test("Then should return an action with property type with 'showLoading'", () => {
      const textAction = "Este test ha sido un exito";
      const expectedAction = {
        type: "showModal",
        payload: { isPositive: true, message: "Este test ha sido un exito" },
      };

      const showLoadingAction = showModalActionCreator(true, textAction);

      expect(showLoadingAction).toEqual(expectedAction);
    });
  });
});
