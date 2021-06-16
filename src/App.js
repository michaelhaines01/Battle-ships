import "./App.css";

import Gamecontroller from "./gamelogic/gamecontroller.js";
import React, { useState } from "react";
import Player from "./factories/player";

function App() {
  //const [displaybool, setdisplay] = useState(false);

  const [restart, setrestart] = useState(false);
  let players = Player();
  // you need to move the gameover function

  return (
    <div>
      <h1> Battleships</h1>
      <Gamecontroller setrestart={setrestart} players={players} />
    </div>
  );
}

export default App;
