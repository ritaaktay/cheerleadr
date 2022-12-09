import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ShoutButton } from "./ShoutButton";
import { Shout } from "./Shout";

test("renders shout button", () => {
  const mockHandleClick = jest.fn();
  render(<ShoutButton letter="M" handleClick={mockHandleClick} />);
  const button: HTMLButtonElement = screen.getByText(/Give me a M!/);
  fireEvent.click(button);
  expect(mockHandleClick).toHaveBeenCalledWith("M");
});
