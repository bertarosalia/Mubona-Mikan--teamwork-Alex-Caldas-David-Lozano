import { render, screen } from "@testing-library/react";
import App from "../../App";
import AnimeContextProvider from "./AnimeContextProvider";

describe("Given an AnimeContextProvider component", () => {
  describe("When it's rendered", () => {
    test("Then it should exist", () => {
      const testHeaderName = "Mubona Mikan title";
      render(
        <AnimeContextProvider>
          <App />
        </AnimeContextProvider>
      );

      const testComponent = screen.getByRole("heading", {
        name: testHeaderName,
      });

      expect(testComponent).toBeInTheDocument();
    });
  });
});
