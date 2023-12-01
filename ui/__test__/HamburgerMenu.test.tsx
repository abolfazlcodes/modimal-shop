/* eslint-disable no-empty-function */
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import HamburgerMenu from "../HamburgerMenu";

describe("Hamburger Menu Component Tests", () => {
  it("should render the component properly initially", () => {
    render(<HamburgerMenu shouldOpenMenu={true} handleOpenMenu={() => {}} />);
  });

  it("should should render span lines with the correct styles initially when shouldOpenMenu is false", () => {
    render(<HamburgerMenu shouldOpenMenu={false} handleOpenMenu={() => {}} />);
    const expectedStyles =
      "inline-block h-1 w-4 rounded-sm transition-all duration-200 bg-[#404040]";

    const spanElements = screen.getAllByTestId("span-elements");

    spanElements.map((spanElement) => {
      const elementStyles = spanElement.getAttribute("class");

      expect(spanElement).toBeInTheDocument();
      expect(elementStyles?.includes(expectedStyles));
      expect(spanElement).not.toHaveClass("rotate-45");
      expect(spanElement).not.toHaveClass("-rotate-45");
    });
  });

  it("should should render span lines with the correct styles when shouldOpenMenu is true", () => {
    render(<HamburgerMenu shouldOpenMenu={true} handleOpenMenu={() => {}} />);
    const expectedStyles =
      "inline-block h-1 w-4 rounded-sm bg-[#404040] transition-all duration-200";

    const spanElements = screen.getAllByTestId("span-elements");

    spanElements.map((spanElement) => {
      const elementStyles = spanElement.getAttribute("class");

      expect(spanElement).toBeInTheDocument();
      expect(elementStyles?.includes(expectedStyles));
    });

    expect(spanElements[0]).toHaveClass("rotate-45");
    expect(spanElements[1]).toHaveClass("-rotate-45");
    expect(spanElements[2]).toHaveClass("rotate-45");
  });

  // describe("Hamburger Menu - when locale is set to en", () => {
  //   beforeEach(() => {
  //     vi.mock("next/router", () => ({
  //       useRouter() {
  //         return {
  //           route: "/",
  //           pathname: "",
  //           query: "",
  //           asPath: "",
  //           locale: "en",
  //         };
  //       },
  //     }));
  //   });
  // });
});
