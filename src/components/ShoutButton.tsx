import React from "react";

type Props = {
  letter: string;
  handleClick: (letter: string) => void;
};

export const ShoutButton: React.FC<Props> = ({ letter, handleClick }) => {
  return (
    <button value={letter} onClick={() => handleClick(letter)}>
      Give me a {letter}!
    </button>
  );
};
