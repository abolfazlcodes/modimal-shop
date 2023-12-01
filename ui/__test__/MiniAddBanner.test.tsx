import { render, screen } from "@testing-library/react";
import MiniAddBanner from "../MiniAddBanner";

describe("MiniAddBanner Component Test Suite", () => {
  it("should render the component properly", () => {
    render(<MiniAddBanner>Advertisement Content</MiniAddBanner>);
    const addElement = screen.getByTestId("miniadd-element");

    expect(addElement).toBeInTheDocument();
  });
});
