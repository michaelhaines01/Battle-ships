import React, { useState } from "react";
import Grid from "../components/grid.js";
import Gameover from "../components/gameover.js";
import Gameboard from "../factories/gameboard.js";

const Gamecontroller = (props) => {
  //initialize player maybe send it as props

  let startplayerboard = props.playerboard;
  let startaiboard = props.aiboard;
  const [aiboard, setaiboard] = useState(startaiboard);
  const [playerboard, setplayerboard] = useState(startplayerboard);
  const [gameover, setgameover] = useState(false);

  const restart = () => {
    props.setrestart(true);
    setgameover(false);
  };

  const testclick = (key, row) => {
    let updatedboard = Gameboard().receiveattack(row, key, aiboard);
    setaiboard([...updatedboard]);
    return;
  };

  let randomnumber = () => {
    const min = 0;
    const max = 9;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  //this is shit
  /*(let aiattack = () => {
    let aishot = false;
    let x = randomnumber();
    let y = randomnumber();
    while (aishot === false) {
      if (player.getboard().receiveattack(x, y) !== false) {
        aishot = true;
        return aishot;
      }
      return false;
    }
  };
*/
  return (
    <div>
      {!gameover && (
        <Grid
          testclick={testclick}
          playerboard={playerboard}
          aiboard={aiboard}
        />
      )}
      {gameover && <Gameover restart={restart} />}
    </div>
  );
};

export default Gamecontroller;
