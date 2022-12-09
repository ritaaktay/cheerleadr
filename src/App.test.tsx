import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("shout buttons can be clicked", () => {
  render(<App />);
  const header: HTMLHeadingElement = screen.getByText(/Cheerleadr/);
  expect(header).toBeInTheDocument();
  const buttons: HTMLButtonElement[] = screen.getAllByText(/Give me a/);
  buttons.forEach((button) => {
    fireEvent.click(button);
    const regex: RegExp = new RegExp("^" + button.value + "!" + "$");
    const shouted: HTMLHeadingElement = screen.getByText(regex);
    expect(shouted).toBeInTheDocument;
  });
});
