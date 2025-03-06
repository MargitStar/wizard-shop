import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from ".";
import { useNavigationContext } from "../../context";
import { PAGES } from "../../constants";

jest.mock("../LogoutButton", () => {
  return jest.fn(() => <button>Logout</button>);
});

jest.mock("../../context", () => ({
  useNavigationContext: jest.fn(),
}));

const mockHandleItemClick = jest.fn();

const renderWithProviders = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Header Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useNavigationContext.mockReturnValue({
      handleItemClick: mockHandleItemClick,
      selectedButton: PAGES[0].page,
    });
  });

  it("menu items are hidden by default", () => {
    renderWithProviders(<Header />);

    expect(screen.queryByRole("menuitem")).toBeNull();
  });

  it("menu items are visible after clicking the menu button", () => {
    renderWithProviders(<Header />);

    fireEvent.click(screen.getByLabelText("account of current user"));

    waitFor(() => {
      PAGES.forEach(({ page }) => {
        expect(screen.getByRole("menuitem", { name: page })).toBeVisible();
      });
    });
  });

  it("renders Header correctly", () => {
    renderWithProviders(<Header />);

    expect(screen.getByText("Logout")).toBeInTheDocument();

    waitFor(() =>
      PAGES.forEach(({ page }) => {
        expect(screen.getByRole("menuitem", { name: page })).not.toBeVisible();
        const buttons = screen.getAllByText(page);
        const button = buttons[0];
        const menuItem = buttons[1];
        expect(button).toBeInTheDocument();
        expect(menuItem).toBeInTheDocument();
      })
    );
  });

  it("opens and closes mobile menu", () => {
    renderWithProviders(<Header />);

    const menuButton = screen.getByLabelText("account of current user");
    fireEvent.click(menuButton);

    PAGES.forEach(({ page }) => {
      expect(screen.getByRole("menuitem", { name: page })).toBeVisible();
    });

    const backdrop = document.querySelector(".MuiBackdrop-root");
    fireEvent.click(backdrop);

    waitFor(() => {
      PAGES.forEach(({ page }) => {
        expect(screen.getByRole("menuitem", { name: page })).toBeVisible();
      });
    });
  });

  it("calls handleItemClick when a navigation item is clicked", () => {
    renderWithProviders(<Header />);

    const firstPageButton = screen.getAllByText(PAGES[0].page)[0];
    fireEvent.click(firstPageButton);

    expect(mockHandleItemClick).toHaveBeenCalledWith(
      PAGES[0].route,
      PAGES[0].page
    );
  });
});
