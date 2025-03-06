import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HeaderItem from ".";

describe("HeaderItem", () => {
  const selectedButton = "Test Page";
  const route = "/test";
  const page = "Test Page";
  const mockHandleCloseNavigation = jest.fn();
  const mockHandleItemClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the header item with the correct text", () => {
    render(
      <HeaderItem
        ButtonComponent="button"
        handleItemClick={mockHandleItemClick}
        handleCloseNavigation={mockHandleCloseNavigation}
        page={page}
        route={route}
        selectedButton={selectedButton}
      />,
    );

    expect(screen.getByText(selectedButton)).toBeInTheDocument();
  });

  it("calls handleItemClick and handleCloseNavigation on click", () => {
    render(
      <HeaderItem
        ButtonComponent="button"
        handleItemClick={mockHandleItemClick}
        handleCloseNavigation={mockHandleCloseNavigation}
        page={page}
        route={route}
        selectedButton={page}
      />,
    );

    const button = screen.getByText(selectedButton);
    fireEvent.click(button);

    expect(mockHandleItemClick).toHaveBeenCalledWith(route, page);
    expect(mockHandleCloseNavigation).toHaveBeenCalledTimes(1);
  });

  it("calls handleItemClick and not handleCloseNavigation on click", () => {
    render(
      <HeaderItem
        ButtonComponent="button"
        handleItemClick={mockHandleItemClick}
        page={page}
        route={route}
        selectedButton={selectedButton}
      />,
    );

    const button = screen.getByText(selectedButton);
    fireEvent.click(button);

    expect(mockHandleItemClick).toHaveBeenCalledWith(route, page);
    expect(mockHandleCloseNavigation).not.toHaveBeenCalled();
  });
});
