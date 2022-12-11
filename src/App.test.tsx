import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("shout buttons can be clicked", () => {
  const dom = render(<App />);
  const header: HTMLHeadingElement = screen.getByText(/Cheerleadr/);
  expect(header).toBeInTheDocument();
  const input: HTMLInputElement = dom.container.querySelector("#word")!;
  input.value = "TYPESCRIPT";
  fireEvent.keyUp(input);
  const buttons: HTMLButtonElement[] = screen.getAllByText(/Give me a/);
  buttons.forEach((button) => {
    fireEvent.click(button);
    const regex: RegExp = new RegExp("^" + button.value + "!" + "$");
    const shouted: HTMLHeadingElement = screen.getByText(regex);
    expect(shouted).toBeInTheDocument;
  });
});
