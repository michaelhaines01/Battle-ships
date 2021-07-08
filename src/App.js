import "./App.css";
import Placeships from "./components/playerboard.js";
import React, { useState } from "react";
import Gameover from "./components/gameover.js";
import Header from "./components/header.js";

function App() {
  //<Gamecontroller setrestart={setrestart} players={players} />
  const [gameover, setgameover] = useState(false);
  const [winner, setwinner] = useState("");
  return (
    <div>
      <Header />
      {!gameover && (
        <Placeships setgameover={setgameover} setwinner={setwinner} />
      )}
      {gameover && <Gameover setgameover={setgameover} winner={winner} />}
    </div>
  );
}

export default App;
