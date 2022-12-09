import React from "react";
import { useState } from "react";
import "./App.css";
import { ShoutButtonContainer } from "./components/ShoutButtonContainer";
import { Shout } from "./components/Shout";

function App() {
  const word = "MAKERS";
  const [shout, setShout] = useState("");

  return (
    <div className="App">
      <h1 id="header">Cheerleadr</h1>
      <ShoutButtonContainer handleClick={setShout} word={word} />
      <Shout letter={shout} />
    </div>
  );
}

export default App;
