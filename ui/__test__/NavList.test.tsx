import { render, screen } from "@testing-library/react";
import NavList from "../NavList";
import { navbarItems } from "@/constants/navbar.constants";

describe("NavListItems Component Test Suites", () => {
  it("should render the same amount of links provided to the component", () => {
    render(<NavList />);

    // getting rid of extra items found
    const navLitsItems = screen.getAllByTestId("list-item-element");

    expect(navLitsItems.length).toEqual(navbarItems.length);

    navLitsItems.forEach((item, i) => {
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent(navbarItems[i].title);
    });
  });
});
