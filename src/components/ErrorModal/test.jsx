import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ErrorModal from ".";

describe("ErrorModal", () => {
  const mockErrorData = {
    data: {
      title: "Error Title",
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockHandleClosenModal = jest.fn();

  it("renders ErrorModal with data", () => {
    render(
      <ErrorModal
        openModal={true}
        handleClose={mockHandleClosenModal}
        error={mockErrorData}
      />,
    );

    expect(screen.getByText("Error Occured")).toBeInTheDocument();
    expect(screen.getByText("Error Title")).toBeInTheDocument();
  });

  it("not renders ErrorModal", () => {
    render(
      <ErrorModal
        openModal={false}
        handleClose={mockHandleClosenModal}
        error={mockErrorData}
      />,
    );

    expect(screen.queryByText("Error Occured")).not.toBeInTheDocument();
    expect(screen.queryByText("Error Title")).not.toBeInTheDocument();
  });

  it("closes ErrorModal on the outside of the modal click", () => {
    render(
      <ErrorModal
        openModal={true}
        handleClose={mockHandleClosenModal}
        error={mockErrorData}
      />,
    );

    const backdrop = document.querySelector(".MuiBackdrop-root");
    fireEvent.click(backdrop);

    // Check if the handleClose function is called
    expect(mockHandleClosenModal).toHaveBeenCalled();
  });
});
