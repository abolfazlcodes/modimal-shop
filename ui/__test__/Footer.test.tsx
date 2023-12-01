import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { FooterLinkItem, footerLinkItems } from "@/constants/footer.constants";

describe("Footer Component Tests", () => {
  beforeEach(() => {
    vitest.spyOn(window, "matchMedia");
  });

  test("it should render the footer component properly", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");

    expect(footerElement).toBeInTheDocument();
  });

  test("it should render only one footer socials component", () => {
    render(<Footer />);

    const socialsWrapper = screen.getAllByTestId("socials-element");

    expect(socialsWrapper[0]).toBeInTheDocument();
    expect(socialsWrapper).toHaveLength(1); // only one should be rendered
  });

  test("it should render all the link items provided to the footer component", () => {
    render(<Footer />);

    const allExpectedLinks: FooterLinkItem[] = footerLinkItems.flatMap(
      (items) => items.listItems,
    );

    const linkElements = screen.getAllByRole("link").slice(0, -4); // remove social links from the list

    linkElements.forEach((link, i) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(allExpectedLinks[i]?.title);
      expect(link).toHaveAttribute("href", allExpectedLinks[i].href);
    });
  });
});
