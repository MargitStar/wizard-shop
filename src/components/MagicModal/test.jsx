import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { jest } from "@jest/globals";
import MagicModal from ".";
import ErrorModal from "../ErrorModal";

jest.mock("../ErrorModal", () => {
  return jest.fn(() => <div>ERRORR</div>);
});

describe("MagicModal Component", () => {
  const mockHandleClose = jest.fn();
  const mockModalContent = jest.fn(() => <div>Modal Content</div>);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state when isLoading is true", () => {
    const useModalDataQueryMock = jest.fn().mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(
      <MagicModal
        open={true}
        handleClose={mockHandleClose}
        id="test-id"
        useModalDataQuery={useModalDataQueryMock}
        ModalContent={mockModalContent}
      />,
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders ModalContent when data is available", async () => {
    const mockData = { someKey: "someValue" };
    const MockModalContentWithData = jest.fn(({ data }) => {
      return <div>{data.someKey}</div>;
    });
    const useModalDataQueryMock = jest.fn().mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    render(
      <MagicModal
        open={true}
        handleClose={mockHandleClose}
        id="test-id"
        useModalDataQuery={useModalDataQueryMock}
        ModalContent={MockModalContentWithData}
      />,
    );

    expect(MockModalContentWithData).toHaveBeenCalledWith(
      { data: { someKey: "someValue" } },
      undefined,
    );
    expect(screen.getByText("someValue")).toBeInTheDocument();
  });

  it("renders ErrorModal when there is an error", () => {
    const mockError = { title: "ERRROOOORRR" };
    const useModalDataQueryMock = jest.fn().mockReturnValue({
      data: null,
      isLoading: false,
      error: mockError,
    });

    render(
      <MagicModal
        open={true}
        handleClose={mockHandleClose}
        id="test-id"
        useModalDataQuery={useModalDataQueryMock}
        ModalContent={mockModalContent}
      />,
    );

    expect(ErrorModal).toHaveBeenCalledWith(
      { openModal: true, error: mockError, handleClose: mockHandleClose },
      undefined,
    );
  });

  it("closes the modal when the close button is clicked", () => {
    const useModalDataQueryMock = jest.fn().mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    });

    render(
      <MagicModal
        open={true}
        handleClose={mockHandleClose}
        id="test-id"
        useModalDataQuery={useModalDataQueryMock}
        ModalContent={mockModalContent}
      />,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  it("does not render anything if the modal is closed", () => {
    const useModalDataQueryMock = jest.fn().mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    });

    render(
      <MagicModal
        open={false}
        handleClose={mockHandleClose}
        id="test-id"
        useModalDataQuery={useModalDataQueryMock}
        ModalContent={mockModalContent}
      />,
    );

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });
});
