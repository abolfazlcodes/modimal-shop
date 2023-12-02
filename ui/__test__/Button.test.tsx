import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button Component Test", () => {
  it("should render the with the correct styles related to size props 'square' ", () => {
    render(<Button size="square">click</Button>);

    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toHaveClass("w-10 h-10");
  });

  it("should render the with the correct styles related to size props 'small' ", () => {
    render(<Button size="small">click</Button>);

    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toHaveClass("w-17 h-10");
  });

  it("should render the with the correct styles related to size props 'medium' ", () => {
    render(<Button size="medium">click</Button>);

    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toHaveClass("w-20 h-10");
  });

  it("should render the with the correct styles related to size props 'large' ", () => {
    render(<Button size="large">click</Button>);

    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toHaveClass("w-40 h-10");
  });

  it("should render the with the correct styles related to type props 'primary' ", () => {
    render(<Button type="primary">click</Button>);

    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toHaveClass("bg-white text-black");
  });

  it("should render the with the correct styles related to type props 'secondary' ", () => {
    render(<Button type="secondary">click</Button>);

    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toHaveClass(
      "bg-miniAddBg text-white font-bold tracking-wide",
    );
  });

  describe("without href attribute", () => {
    it("should render the button component properly", () => {
      render(<Button>click</Button>);

      const buttonEl = screen.getByRole("button");

      expect(buttonEl).toBeInTheDocument();
      expect(buttonEl).toHaveTextContent(/click/i);
    });
  });

  describe("with href attribute", () => {
    it("should render the button component with link and correct href", () => {
      const hrefLink = "/sample";
      render(<Button href={hrefLink}>click</Button>);

      const buttonEl = screen.getByRole("button");
      const buttonLinkEl = screen.getByRole("link", { name: /click/i });

      expect(buttonEl).toBeInTheDocument();
      expect(buttonLinkEl).toBeInTheDocument();

      expect(buttonEl).toHaveTextContent(/click/i);
      expect(buttonLinkEl).toHaveAttribute("href", hrefLink);
    });
  });
});
