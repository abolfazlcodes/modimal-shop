import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero Component Test", () => {
  it("should render the component properly", () => {
    render(<Hero />);

    const headingText = ["Elegance In Simplicity,", "Earth's Harmony"];

    const heroSection = screen.getByTestId("hero-section");
    const headingEls = screen.getAllByRole("heading");

    expect(heroSection).toBeInTheDocument();

    headingEls.forEach((headingItem, i) => {
      expect(headingItem).toBeInTheDocument();
      expect(headingItem).toHaveTextContent(headingText[i]);
    });

    it("should render a button with link and href", () => {
      render(<Hero />);

      const buttonEl = screen.getByRole("button");
      const buttonLinkEl = screen.getByRole("link", { name: /new in/i });

      expect(buttonEl).toBeInTheDocument();
      expect(buttonEl).toHaveTextContent(/new in/i);

      expect(buttonLinkEl).toBeInTheDocument();
    });
  });
});
