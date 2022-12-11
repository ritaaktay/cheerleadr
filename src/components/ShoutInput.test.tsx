import React from "react";

import { screen, render, fireEvent } from "@testing-library/react";
import { ShoutInput } from "./ShoutInput";

test("reads shout input", () => {
  const mockWordSetter = jest.fn();
  const mockShoutSetter = jest.fn();
  const component = render(
    <ShoutInput handleInput={mockWordSetter} clearShout={mockShoutSetter} />
  );
  const input: HTMLInputElement = component.container.querySelector("#word")!;
  input.value = "HELLO";
  fireEvent.keyUp(input);
  expect(mockWordSetter).toHaveBeenCalledWith("HELLO");
  expect(mockShoutSetter).toHaveBeenCalledWith("");
});
