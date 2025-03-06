import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DataDisplayer from ".";
import { useNavigationContext } from "../../context";
import usePagination from "../../utils/paginator";
import { useNavigate } from "react-router";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

jest.mock("../MagicModal", () => {
  return jest.fn(() => <div>Magic Modal</div>);
});

jest.mock("../ErrorModal", () => {
  return jest.fn(() => <div>Error Modal</div>);
});

jest.mock("../MagicCard", () => {
  return jest.fn(() => <div>Magic Card</div>);
});

jest.mock("../../utils/paginator", () => jest.fn());

jest.mock("../../context", () => ({
  useNavigationContext: jest.fn(),
}));

const mockHandleItemClick = jest.fn();

const renderWithProviders = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("DataDisplayer Component", () => {
  const mockNavigate = jest.fn();
  const mockName = "Test Name";
  const mockContent = jest.fn(() => <div>Magic Card Content</div>);
  const mockModalContent = jest.fn(() => <div>Magic Modal Content</div>);
  const useModalDataQueryMock = jest.fn().mockReturnValue({
    data: null,
    isLoading: false,
    error: null,
  });

  beforeEach(() => {
    jest.clearAllMocks();
    useNavigate.mockReturnValue(mockNavigate);
    useNavigationContext.mockReturnValue({
      handleItemClick: mockHandleItemClick,
    });
    usePagination.mockReturnValue({
      paginatedData: [],
    });
  });

  it("render DataDisplayer component", () => {
    const mockData = [{ id: 1 }, { id: 2 }];
    const mockResponse = {
      data: mockData,
      isLoading: false,
      error: null,
    };

    usePagination.mockReturnValue({
      paginatedData: mockData,
    });

    renderWithProviders(
      <DataDisplayer
        name={mockName}
        Content={mockContent}
        ModalContent={mockModalContent}
        response={mockResponse}
        useModalDataQuery={useModalDataQueryMock}
        showModal={true}
      />
    );

    expect(screen.getByText(mockName)).toBeInTheDocument();
    const magicCards = screen.getAllByText("Magic Card");
    expect(magicCards).toHaveLength(2);
  });

  it("render DataDisplayer component with error", () => {
    const mockResponse = {
      data: null,
      isLoading: false,
      error: { message: "Error Message" },
    };

    renderWithProviders(
      <DataDisplayer
        name={mockName}
        Content={mockContent}
        ModalContent={mockModalContent}
        response={mockResponse}
        useModalDataQuery={useModalDataQueryMock}
        showModal={true}
      />
    );

    expect(screen.queryByText(mockName)).not.toBeInTheDocument();
    expect(screen.getByText("Error Modal")).toBeInTheDocument();
  });

  it("render DataDisplayer component with loading", () => {
    const mockResponse = {
      data: null,
      isLoading: true,
      error: null,
    };

    renderWithProviders(
      <DataDisplayer
        name={mockName}
        Content={mockContent}
        ModalContent={mockModalContent}
        response={mockResponse}
        useModalDataQuery={useModalDataQueryMock}
        showModal={true}
      />
    );

    expect(screen.getByText(mockName)).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("cliclking the element when showmodal is false", () => {
    const mockData = [{ id: 1 }, { id: 2 }];
    const mockResponse = {
      data: mockData,
      isLoading: false,
      error: null,
    };

    usePagination.mockReturnValue({
      paginatedData: mockData,
    });

    renderWithProviders(
      <DataDisplayer
        name={mockName}
        Content={mockContent}
        ModalContent={mockModalContent}
        response={mockResponse}
        useModalDataQuery={useModalDataQueryMock}
        showModal={false}
      />
    );
    const magicCard = screen.getAllByText("Magic Card")[0];

    fireEvent.click(magicCard);

    waitFor(() =>
      expect(screen.getByText("Modal Content")).not.toBeInTheDocument()
    );
  });

  it("cliclking the element when showmodal is true", () => {
    const mockData = [{ id: 1 }, { id: 2 }];
    const mockResponse = {
      data: mockData,
      isLoading: false,
      error: null,
    };

    usePagination.mockReturnValue({
      paginatedData: mockData,
    });

    renderWithProviders(
      <DataDisplayer
        name={mockName}
        Content={mockContent}
        ModalContent={mockModalContent}
        response={mockResponse}
        useModalDataQuery={useModalDataQueryMock}
        showModal={true}
      />
    );
    const magicCard = screen.getAllByText("Magic Card")[0];

    fireEvent.click(magicCard);

    waitFor(() => {
      expect(screen.getByText("Modal Content")).toBeInTheDocument();
      expect(window.history.state).not.toBeNull();
      expect(window.location.search).toBe("?modal=1");

      const closeButton = screen.getByRole("button", { name: /close/i });
      fireEvent.click(closeButton);
      expect(mockNavigate).toHaveBeenCalledWith("", { replace: true });
    });
  });
});
