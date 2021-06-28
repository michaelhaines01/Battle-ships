import "./App.css";

import Gamecontroller from "./gamelogic/gamecontroller.js";
import Placeships from "./components/playerboard.js";
import React, { useState } from "react";
import Player from "./factories/player";

function App() {
  //all this does is restart the whole app

  //const [restart, setrestart] = useState(false);
  //this initializes the player
  // call this after placeing of ships?

  //let players = Player();
  //<Gamecontroller setrestart={setrestart} players={players} />

  return (
    <div>
      <Placeships />
    </div>
  );
}

export default App;
