import { fireEvent, render, screen } from "@testing-library/react";
import Navigation from "../Navigation";

describe("Navigation component tests", () => {
  it("should render the navigation component properly", () => {
    render(<Navigation />);
    const navElement = screen.getByRole("navigation");

    expect(navElement).toBeInTheDocument();
  });

  it("should open the search box modal whenever clicked on the search icon button", () => {
    render(<Navigation />);

    const searchBtnEl = screen.getByTestId("searchBtn-element");

    fireEvent.click(searchBtnEl);

    const searchBoxEl = screen.getByTestId("search-box-element");

    expect(searchBoxEl).toBeInTheDocument();
  });

  it("should not show the search box modal initially", () => {
    render(<Navigation />);

    const searchModalEl = screen.queryByTestId("search-box-element");

    expect(searchModalEl).not.toBeInTheDocument();
  });

  it("should not render the mobile navigation initially", () => {
    render(<Navigation />);

    const mobileNavElement = screen.queryByTestId("mobile-nav-element");

    expect(mobileNavElement).not.toBeInTheDocument();
  });

  it("should render the mobile navigation when clicked on the hamburgerMenu", () => {
    render(<Navigation />);

    const hamburgerMenuEl = screen.queryByTestId(
      "hamburgerMenu-element",
    ) as HTMLElement;

    fireEvent.click(hamburgerMenuEl);

    const mobileNavElement = screen.getByTestId("mobile-nav-element");

    expect(mobileNavElement).toBeInTheDocument();
  });
});
