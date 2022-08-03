import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a gif", () => {
      const imageAlt = "Mandarin dancing, loading";
      render(<Loading />);

      const test = screen.getByRole("img", {
        name: imageAlt,
      });

      expect(test).toBeInTheDocument();
    });
  });
});
