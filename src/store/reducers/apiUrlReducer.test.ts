import apiUrlReducer from "./apiUrlReducer";

describe("Given an api URL Reducer function", () => {
  describe("When it´s instantiated with '1' and nextAnimePage as action with payload true", () => {
    test("It should return '2'", () => {
      const currentNumberPage = 1;
      const newNumberPage = 2;
      const actionAnimePage = { type: "nextAnimePage", payload: true };

      const apiUrlReducerTest = apiUrlReducer(
        currentNumberPage,
        actionAnimePage
      );

      expect(apiUrlReducerTest).toBe(newNumberPage);
    });
  });

  describe("When it´s instantiated with '1' and nextAnimePage as action with payload false", () => {
    test("It should return '1'", () => {
      const currentNumberPage = 1;
      const newNumberPage = 1;
      const actionAnimePage = { type: "nextAnimePage", payload: false };

      const apiUrlReducerTest = apiUrlReducer(
        currentNumberPage,
        actionAnimePage
      );

      expect(apiUrlReducerTest).toBe(newNumberPage);
    });
  });

  describe("When it´s instantiated with '1' and previousAnimePage as action", () => {
    test("It should return '1'", () => {
      const currentNumberPage = 1;
      const newNumberPage = 1;
      const actionAnimePage = { type: "previousAnimePage" };

      const apiUrlReducerTest = apiUrlReducer(
        currentNumberPage,
        actionAnimePage
      );

      expect(apiUrlReducerTest).toBe(newNumberPage);
    });
  });

  describe("When it´s instantiated with '4' and previousAnimePage as action", () => {
    test("It should return '3'", () => {
      const currentNumberPage = 4;
      const newNumberPage = 3;
      const actionAnimePage = { type: "previousAnimePage" };

      const apiUrlReducerTest = apiUrlReducer(
        currentNumberPage,
        actionAnimePage
      );

      expect(apiUrlReducerTest).toBe(newNumberPage);
    });
  });
});
