import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/authSlice";
import LogoutButton from "./index";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("../../utils/authSlice", () => ({
  logout: jest.fn(),
}));

describe("LogoutButton", () => {
  test("should dispatch logout action on button click", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(<LogoutButton />);

    const button = screen.getByText("Log Out");
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
