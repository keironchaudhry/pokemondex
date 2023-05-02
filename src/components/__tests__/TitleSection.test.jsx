import { render, screen } from "@testing-library/react";
import { TitleSection } from "../TitleSection";

test("Search bar input is present on screen", () => {
  render(<TitleSection />);

  const searchBar = screen.getByPlaceholderText("Enter pokemon name");

  expect(searchBar).toBeInTheDocument();
});
