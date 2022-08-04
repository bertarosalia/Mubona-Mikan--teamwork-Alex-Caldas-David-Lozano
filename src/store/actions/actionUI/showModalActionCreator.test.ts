import { showModalActionCreator } from "./UIActionsCreator";

describe("Given the showModalActionCreator function", () => {
  describe("When it's instantiated with 'true' and 'Este test ha sido un exito'", () => {
    test("Then should return an action with property type with 'showModal' and payload true with 'Este test ha sido un exito'", () => {
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
