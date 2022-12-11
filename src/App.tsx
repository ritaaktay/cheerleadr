import React from "react";
import { useState } from "react";
import "./App.css";
import { ShoutButtonContainer } from "./components/ShoutButtonContainer";
import { Shout } from "./components/Shout";
import { ShoutInput } from "./components/ShoutInput";

function App() {
  const [shout, setShout] = useState("");
  const [word, setWord] = useState("");

  return (
    <div className="App">
      <h1 id="header">Cheerleadr</h1>
      <ShoutInput handleInput={setWord} clearShout={setShout} />
      <ShoutButtonContainer handleClick={setShout} word={word} />
      <Shout letter={shout} />
    </div>
  );
}

export default App;
