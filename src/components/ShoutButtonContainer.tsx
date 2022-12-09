import React from "react";
import { ShoutButton } from "./ShoutButton";

type Props = {
  handleClick: (letter: string) => void;
  word: string;
};

export const ShoutButtonContainer: React.FC<Props> = ({
  handleClick,
  word,
}) => {
  return (
    <div>
      {word.split("").map((char, index) => {
        return (
          <ShoutButton
            key={index + char}
            letter={char}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};
