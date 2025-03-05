import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MagicCard from "./index";

describe("MagicCard", () => {
  const mockData = {
    id: 1,
    name: "Magic Card",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockHandleOpenModal = jest.fn();
  const mockContent = jest.fn(() => <div>Card Content</div>);

  it("renders MagicCard component with clickable button", () => {
    const selectedCardId = 1;

    render(
      <MagicCard
        Content={mockContent}
        data={mockData}
        isClickable={true}
        handleOpenModal={mockHandleOpenModal}
        selectedCardId={selectedCardId}
      />,
    );

    const card = screen.getByText("Card Content").parentElement;
    fireEvent.click(card);
    expect(screen.getByText("Card Content")).toBeInTheDocument();

    expect(mockHandleOpenModal).toHaveBeenCalledWith(mockData.id);
    expect(mockContent).toHaveBeenCalledWith({ data: mockData }, undefined);
  });

  it("renders MagicCard component without clickable button", () => {
    render(
      <MagicCard
        Content={mockContent}
        data={mockData}
        isClickable={false}
        handleOpenModal={mockHandleOpenModal}
        selectedCardId={null}
      />,
    );

    const nonClickableCard = screen.getByText("Card Content").parentElement;
    fireEvent.click(nonClickableCard);
    expect(mockHandleOpenModal).not.toHaveBeenCalled();

    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(mockContent).toHaveBeenCalledWith({ data: mockData }, undefined);
  });
});
