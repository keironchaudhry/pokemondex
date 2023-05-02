import { render, screen } from "@testing-library/react";
import { TitleSection } from "../TitleSection";

test("Search bar input is present on screen", () => {
  render(<TitleSection />);

  const searchBar = screen.getByPlaceholderText("Enter pokemon name");

  expect(searchBar).toBeInTheDocument();
});

test("Search button is present in the app", () => {
  render(<TitleSection />);

  const searchButton = screen.getByRole("button");

  expect(searchButton).toBeInTheDocument();
});
