import React from "react";
import { render, screen } from "@testing-library/react";
import { Shout } from "./Shout";

test("renders letter", () => {
  render(<Shout letter="M" />);
  const shouted: HTMLHeadingElement = screen.getByText(/M!/);
  expect(shouted).toBeInTheDocument();
});
