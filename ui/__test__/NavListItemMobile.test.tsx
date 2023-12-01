import { render, screen } from "@testing-library/react";
import NavListItemMobile from "../NavListItemMobile";

describe("NavListItemMobile Component Tests Suite", () => {
  it("should render the component properly", () => {
    render(<NavListItemMobile href="/">link to home page</NavListItemMobile>);

    const listElement = screen.getByRole("listitem");

    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveTextContent(/link to home page/i);
  });

  it("should render the component with a link element and correct href", () => {
    render(<NavListItemMobile href="/">link to home page</NavListItemMobile>);

    const linkElement = screen.getByRole("link");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
