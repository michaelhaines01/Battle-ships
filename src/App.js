import "./App.css";
import Placeships from "./components/playerboard.js";
import React, { useState } from "react";
import Gameover from "./components/gameover.js";
import Header from "./components/header.js";

function App() {
  //<Gamecontroller setrestart={setrestart} players={players} />
  const [gameover, setgameover] = useState(false);

  return (
    <div>
      <Header />

      <Placeships setgameover={setgameover} />
    </div>
  );
}

export default App;
