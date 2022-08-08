import {
  closeFormActionCreator,
  showFormActionCreator,
  showModalActionCreator,
} from "./UIActionsCreator";
import { showLoadingActionCreator } from "./UIActionsCreator";
import { closeModalActionCreator } from "./UIActionsCreator";
import { closeLoadingActionCreator } from "./UIActionsCreator";

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

describe("Given the showLoadingActionCreator function", () => {
  describe("When it's invoked", () => {
    test("Then it should return an action with property type with 'showLoading'", () => {
      const expectedAction = { type: "showLoading" };

      const showLoadingAction = showLoadingActionCreator();

      expect(showLoadingAction).toEqual(expectedAction);
    });
  });
});

describe("Given the closeModalActionCreator function", () => {
  describe("When it's instantiated", () => {
    test("Then should return an action with property type with 'closeModal'", () => {
      const expectedAction = { type: "closeModal" };

      const closeLoadingAction = closeModalActionCreator();

      expect(closeLoadingAction).toEqual(expectedAction);
    });
  });
});

describe("Given the closeLoadingActionCreator function", () => {
  describe("When it's invoqued", () => {
    test("Then should return an action with property type with 'closeLoading'", () => {
      const expectedAction = { type: "closeLoading" };

      const closeLoadingAction = closeLoadingActionCreator();

      expect(closeLoadingAction).toEqual(expectedAction);
    });
  });

  describe("Given the showFormActionCreator function", () => {
    describe("When it's invoked", () => {
      test("Then it should return an action with property type with 'showLoading'", () => {
        const expectedAction = { type: "showForm" };

        const showLoadingAction = showFormActionCreator();

        expect(showLoadingAction).toEqual(expectedAction);
      });
    });
  });

  describe("Given the closeFormActionCreator function", () => {
    describe("When it's invoked", () => {
      test("Then it should return an action with property type with 'showLoading'", () => {
        const expectedAction = { type: "closeForm" };

        const showLoadingAction = closeFormActionCreator();

        expect(showLoadingAction).toEqual(expectedAction);
      });
    });
  });
});
