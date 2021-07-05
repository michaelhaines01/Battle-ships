import "./App.css";

import Gamecontroller from "./gamelogic/gamecontroller.js";
import Placeships from "./components/playerboard.js";
import React, { useState } from "react";
import Player from "./factories/player";
import Gameboard from "./factories/gameboard.js";
function App() {
  //<Gamecontroller setrestart={setrestart} players={players} />
  const [gameover, setgameover] = useState(false);
  const player = Gameboard();
  const ai = Gameboard();
  return (
    <div>
      <Placeships player={player} ai={ai} setgameover={setgameover} />
    </div>
  );
}

export default App;
