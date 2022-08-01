import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with alternative text 'Mubona Mikan title'", () => {
      const alternativeText = "Mubona Mikan title";

      render(<Header />);
      const image = screen.getByRole("img", { name: alternativeText });

      expect(image).toBeInTheDocument();
    });

    test("Then it should show an image with alternative text 'Menu icon'", () => {
      const alternativeIconText = "Menu icon";

      render(<Header />);
      const image = screen.getByRole("img", { name: alternativeIconText });

      expect(image).toBeInTheDocument();
    });
  });
});
