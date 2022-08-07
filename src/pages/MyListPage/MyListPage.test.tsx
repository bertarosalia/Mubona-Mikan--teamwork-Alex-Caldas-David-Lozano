import { render, screen } from "@testing-library/react";
import MyListPage from "./MyListPage";

describe("Given a My List Page component", () => {
  describe("When it´s rendered", () => {
    test("Then it should show an h2 with 'My anime list page' inside", () => {
      const h2Text = "My Anime List";

      render(<MyListPage />);
      const expectedText = screen.getByRole("heading", { name: h2Text });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
