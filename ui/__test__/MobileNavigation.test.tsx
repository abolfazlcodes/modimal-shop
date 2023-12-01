import { render, screen } from "@testing-library/react";
import MobileNavigation from "../MobileNavigation";

describe("Mobile Navigation Component Test Suite", () => {
  it("should not render the mobile navigation initially", () => {
    render(<MobileNavigation />);

    const mobileNavElement = screen.getByTestId("mobile-nav-element");

    expect(mobileNavElement).toBeInTheDocument();
  });
});
