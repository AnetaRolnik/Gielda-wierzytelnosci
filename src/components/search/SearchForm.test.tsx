import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "./SearchForm";

describe("SearchForm Component", () => {
  test("shows error when search has less than 3 chars", () => {
    render(<SearchForm onSearch={() => {}} isLoading={false} />);

    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, "11");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const errorText = screen.getByText(
      `Szukana fraza musi mieć co najmniej 3 znaki.`
    );
    expect(errorText).toBeInTheDocument();
  });

  test("if the button is disabled while loading", () => {
    render(<SearchForm onSearch={() => {}} isLoading={true} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
