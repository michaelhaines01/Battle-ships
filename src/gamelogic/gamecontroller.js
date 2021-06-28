import Grid from "../components/grid.js";
import React, { useState } from "react";
import Gameover from "../components/gameover.js";
import Placeships from "../components/playerboard.js";

const Gamecontroller = (props) => {
  //initialize player maybe send it as props
  let players = props.players;
  const [turn, setturn] = useState(0);
  const [gameover, setgameover] = useState(false);
  //this is too deep
  console.log(players.theships);
  players.player.getboard();
  //players.player.getboard().placeships();
  players.player.getaiboard().placeships();

  const restart = () => {
    props.setrestart(true);
    setgameover(false);
  };

  const testclick = (key, row) => {
    //everytime it increments it adds to the game count
    setturn((prevCount) => prevCount + 1);

    if (players.player.getaiboard().receiveattack(row, key) == true) {
      // check if game over if not return
      setgameover(players.player.getboard().allshipssunk());
    } else if (players.aiattack() === true) {
      setgameover(players.player.getaiboard().allshipssunk());
      players.aiattack();
    }
    setgameover(players.player.getaiboard().allshipssunk());
  };

  return (
    <div>
      {!gameover && <Grid players={players} testclick={testclick} />}
      {gameover && <Gameover restart={restart} />}
    </div>
  );
};

export default Gamecontroller;
