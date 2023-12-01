import { render, screen, fireEvent } from "@testing-library/react";
import Disclosure from "../Disclosure";

describe("Disclosure Component Tests", () => {
  beforeEach(() => {
    render(
      <Disclosure>
        <Disclosure.Header headerOpenName="menu">Hi</Disclosure.Header>
        <Disclosure.Content contentName="menu">
          <span>the content</span>
        </Disclosure.Content>
      </Disclosure>,
    );
  });

  it("should render the component properly", () => {
    const headerElement = screen.getByTestId("header-element");

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("Hi");
  });

  it("should not open the content element initially when there is no click", () => {
    const contentElement = screen.queryByTestId("content-element");

    expect(contentElement).not.toBeInTheDocument();
  });

  it("should open the content element when clicked on the header and close it when clicked again", () => {
    const headerElement = screen.getByTestId("header-element");
    let contentElement;

    // click on the header
    fireEvent.click(headerElement);

    contentElement = screen.getByTestId("content-element");

    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveTextContent("the content");

    // click to close again
    fireEvent.click(headerElement);

    // should not find any element
    contentElement = screen.queryByTestId("content-element");

    expect(contentElement).not.toBeInTheDocument();
  });
});
