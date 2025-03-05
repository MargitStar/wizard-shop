import React from "react";

import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";
import FormTextField from ".";

describe("FormTextField", () => {
  const Wrapper = ({ children }) => {
    const { control } = useForm();
    return <form>{React.cloneElement(children, { control })}</form>;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders FormTextField correctly", () => {
    render(
      <Wrapper>
        <FormTextField type="email" label="Email" />
      </Wrapper>,
    );
    const input = screen.getByRole("textbox", { name: /email/i });
    expect(input).toBeInTheDocument();
  });

  it("updates the value when user types", async () => {
    render(
      <Wrapper>
        <FormTextField type="email" label="Email" />
      </Wrapper>,
    );
    const input = screen.getByRole("textbox", { name: /email/i });
    await userEvent.type(input, "test@example.com");
    expect(input).toHaveValue("test@example.com");
  });

  it("FormTextField is required", () => {
    render(
      <Wrapper>
        <FormTextField type="email" label="Email" />
      </Wrapper>,
    );
    const input = screen.getByRole("textbox", { name: /email/i });
    expect(input).toBeRequired();
  });
});
