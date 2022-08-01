import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's rendered and the App paints it", () => {
    test("Then it should exist in project", () => {
      render(<Footer />);

      const imageAlt = "Icono Facebook";

      const imageFromFooter = screen.getByRole("img", {
        name: imageAlt,
      });

      expect(imageFromFooter).toBeInTheDocument();
    });
  });
});
