import React from "react";

type Props = {
  letter: String;
};

export const Shout: React.FC<Props> = (props) => {
  return <h1>{props.letter}!</h1>;
};
