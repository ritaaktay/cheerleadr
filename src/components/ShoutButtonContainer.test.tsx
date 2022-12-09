import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { ShoutButtonContainer } from "./ShoutButtonContainer";

test("renders all shout buttons for word", () => {
  const word = "HELLO";
  const mockHandleClick = jest.fn();
  render(<ShoutButtonContainer word={word} handleClick={mockHandleClick} />);
  const buttons: HTMLButtonElement[] = screen.getAllByText(/Give me a/);
  buttons.forEach((button) => fireEvent.click(button));
  expect(mockHandleClick).toHaveBeenNthCalledWith(1, "H");
  expect(mockHandleClick).toHaveBeenNthCalledWith(2, "E");
  expect(mockHandleClick).toHaveBeenNthCalledWith(3, "L");
  expect(mockHandleClick).toHaveBeenNthCalledWith(4, "L");
  expect(mockHandleClick).toHaveBeenNthCalledWith(5, "O");
});
