import { fireEvent, render, screen } from "@testing-library/react";
import NavListItem from "../NavListItem";

const mockNavListDataWithoutSubmenu = {
  id: 1,
  title: "collection",
  href: "/collection",
  hasSubmenu: false,
};

const mockNavListData = {
  id: 1,
  title: "collection",
  href: "/collection",
  hasSubmenu: true,
  submenu: {
    linkItems: [
      {
        header: "category",
        links: [
          { title: "shop all", href: "/products" },
          { title: "boluses & Top", href: "/products?category=boluses" },
          { title: "pants", href: "/products?category=pants" },
          { title: "dresses & jumsuits", href: "/products?category=dresses" },
          { title: "outwear & jackets", href: "/products?category=jackets" },
          { title: "pullovers", href: "/products" },
          { title: "tees", href: "/products?category=tees" },
          { title: "shorts & skirts", href: "/products?category=shorts" },
        ],
      },
      {
        header: "featured",
        links: [
          { title: "new in", href: "/new-in" },
          { title: "modiweek", href: "/modiweek" },
          { title: "plus size", href: "/plus-size" },
          { title: "best seller", href: "/best-sellers" },
        ],
      },
      {
        header: "more",
        links: [
          { title: "bundles", href: "/" },
          { title: "occasion wear", href: "/occasions" },
          { title: "matching set", href: "/sets" },
          { title: "suiting", href: "/suits" },
        ],
      },
    ],
    images: [
      { src: "/collection-image-one.png", name: "blouses" },
      { src: "/collection-image-two.png", name: "plus sizes" },
    ],
  },
};

describe("NavListItem Component Test Suite", () => {
  it("should render the component properly", () => {
    render(<NavListItem navItemData={mockNavListData} />);

    const navItemElement = screen.getByTestId("list-item-element");

    expect(navItemElement).toBeInTheDocument();
  });

  it("should not render the overlay component initially", () => {
    render(<NavListItem navItemData={mockNavListData} />);

    const overlayElement = screen.queryByTestId("overlay-element");

    expect(overlayElement).not.toBeInTheDocument();
  });

  it("should render the submenu items initially but not visible", () => {
    render(<NavListItem navItemData={mockNavListData} />);

    const submenuElement = screen.getByTestId("list-item-submenu-element");

    expect(submenuElement).toBeInTheDocument();
    expect(submenuElement).toHaveClass("invisible");
    expect(submenuElement).toHaveClass("opacity-0");
  });

  it("should show the submenu component and the overlay when mouse hovers over the list item element and hide it when mouse leaves", () => {
    render(<NavListItem navItemData={mockNavListData} />);

    let overlayElement;

    const navItemElement = screen.getByTestId("list-item-element");

    // mouse enter event
    fireEvent.mouseEnter(navItemElement);

    // getting the overlay element now
    overlayElement = screen.getByTestId("overlay-element");

    // expect to have the submenu with active classes
    expect(overlayElement).toBeInTheDocument();

    // mouse leave event
    fireEvent.mouseLeave(navItemElement);

    // expect not to have the submenu with active classes - overlay existance highlights if the hover is working properly
    overlayElement = screen.queryByTestId("overlay-element");
    expect(overlayElement).not.toBeInTheDocument();
  });

  it("should not render submenu when there is no submenu provided", () => {
    render(<NavListItem navItemData={mockNavListDataWithoutSubmenu} />);

    const submenuElement = screen.queryByTestId("list-item-submenu-element");

    expect(submenuElement).not.toBeInTheDocument();
  });
});
