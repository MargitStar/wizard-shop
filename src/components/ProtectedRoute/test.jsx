import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from ".";

describe("ProtectedRoute", () => {
  test("renders Outlet when user is authorized", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route element={<ProtectedRoute isAuthorized={true} />}>
            <Route path="/protected" element={<p>Protected Content</p>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(getByText("Protected Content")).toBeInTheDocument();
  });

  test("redirects to /login when user is unauthorized", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route element={<ProtectedRoute isAuthorized={false} />}>
            <Route path="/protected" element={<p>Protected Content</p>} />
          </Route>
          <Route path="/login" element={<p>Login Page</p>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(container.innerHTML).toContain("Login Page");
  });
});
