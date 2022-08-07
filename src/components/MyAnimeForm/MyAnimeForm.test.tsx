import { render, screen } from "@testing-library/react";
import MyAnimeForm from "./MyAnimeForm";

describe("Given the MyAnimeForm component", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Year:'", () => {
      const text = "Year:";

      render(<MyAnimeForm />);

      const textForm = screen.getByText(text);

      expect(textForm).toBeInTheDocument();
    });
  });
});
