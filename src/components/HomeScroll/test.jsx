import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HomeScroll from ".";
import { useNavigationContext } from "../../context";
import usePagination from "../../utils/paginator";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../context", () => ({
  useNavigationContext: jest.fn(),
}));

jest.mock("../../utils/paginator", () => jest.fn());

const renderWithProviders = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("HomeScroll", () => {
  const mockName = "Test Name";

  beforeEach(() => {
    jest.clearAllMocks();
    window.scrollTo = jest.fn();
    useNavigationContext.mockReturnValue({
      handleItemClick: jest.fn(),
    });

    usePagination.mockReturnValue({
      paginatedData: [],
    });
  });

  const mockHandleItemClick = jest.fn();
  const mockContent = jest.fn(() => <div>Home Scroll Content</div>);

  it("renders HomeScroll with error name is not clickable", () => {
    const mockData = {
      data: null,
      isLoading: false,
      error: { message: "Error Message" },
    };

    renderWithProviders(
      <HomeScroll name={mockName} response={mockData} Content={mockContent} />
    );

    const card = screen.getByText(mockName);
    fireEvent.click(card);

    expect(mockHandleItemClick).not.toHaveBeenCalled();
  });

  it("renders HomeScroll name is clickable", () => {
    const mockData = {
      data: { name: "test" },
      isLoading: false,
      error: null,
    };

    useNavigationContext.mockReturnValue({
      handleItemClick: mockHandleItemClick,
    });

    renderWithProviders(
      <HomeScroll name={mockName} response={mockData} Content={mockContent} />
    );

    const card = screen.getByText(mockName);
    fireEvent.click(card);

    expect(mockHandleItemClick).toHaveBeenCalled();
  });

  it("renders HomeScroll with loading state", () => {
    const mockData = {
      data: null,
      isLoading: true,
      error: null,
    };

    renderWithProviders(
      <HomeScroll name="Test Page" response={mockData} Content={mockContent} />
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders HomeScroll with loading state", () => {
    const mockData = {
      data: null,
      isLoading: true,
      error: null,
    };

    renderWithProviders(
      <HomeScroll name="Test Page" response={mockData} Content={mockContent} />
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders paginated data correctly", () => {
    const mockData = [{ id: 1 }, { id: 2 }];
    usePagination.mockReturnValue({
      paginatedData: mockData,
    });
    useNavigationContext.mockReturnValue({
      handleItemClick: mockHandleItemClick,
    });

    renderWithProviders(
      <HomeScroll
        name="Test Page"
        response={{ data: mockData }}
        Content={mockContent}
      />
    );

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);

    expect(screen.getAllByText("Home Scroll Content")).toHaveLength(2);

    fireEvent.click(links[1]);
    expect(mockHandleItemClick).toHaveBeenCalledWith(
      "undefined?modal=1",
      undefined,
      false
    );

    expect(links[1]).toHaveAttribute("href", "/undefined?modal=1");
    expect(links[2]).toHaveAttribute("href", "/undefined?modal=2");
  });
});
