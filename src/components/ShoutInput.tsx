import React from "react";

type Props = {
  handleInput: (word: string) => void;
  clearShout: (letter: string) => void;
};
export const ShoutInput: React.FC<Props> = ({ handleInput, clearShout }) => {
  const trackInput = () => {
    const input: HTMLInputElement = document.querySelector("#word")!;
    const word: string = input.value;
    handleInput(word.toUpperCase());
    clearShout("");
  };
  return (
    <div>
      <p></p>
      <input id="word" type="text" onKeyUp={trackInput} />
      <p></p>
    </div>
  );
};
