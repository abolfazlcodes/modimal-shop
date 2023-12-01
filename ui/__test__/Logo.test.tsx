import { render, screen } from "@testing-library/react";
import Logo from "../Logo";

describe("Logo component tests suite", () => {
  it("should render the logo component properly", () => {
    render(<Logo />);

    const logoLinkElement = screen.getByRole("link", { name: /modimal/i });

    expect(logoLinkElement).toBeInTheDocument();
    expect(logoLinkElement).toHaveAttribute("href", "/");
  });

  // Todo: test page flow and url change with cypress or playright for e2e
});
