import "./App.css";
import Placeships from "./components/playerboard.js";
import React, { useState } from "react";
import Infoboard from "./components/info.js";
import Header from "./components/header.js";

function App() {
  //<Gamecontroller setrestart={setrestart} players={players} />
  const [gameover, setgameover] = useState(true);

  return (
    <div>
      <Header />
      {gameover && <Infoboard setgameover={setgameover} />}
      {!gameover && <Placeships setgameover={setgameover} />}
    </div>
  );
}

export default App;
