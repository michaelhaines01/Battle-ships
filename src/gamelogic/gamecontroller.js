import React, { useState } from "react";
import Grid from "../components/grid.js";
import Gameover from "../components/gameover.js";
import Gameboard from "../factories/gameboard.js";

const Gamecontroller = (props) => {
  let playerboard = props.playerboard;
  let aiboard = props.aiboard;
  const [theaiboard, setaiboard] = useState(aiboard);
  const [theplayerboard, setplayerboard] = useState(playerboard);

  const testclick = (key, row) => {
    let updatedboard = props.ai.receiveattack(row, key, aiboard);
    setaiboard([...updatedboard.gameboard]);

    if (props.ai.allshipssunk() === true) {
      props.setgameover(true);
      props.setwinner("You win!!");
    } else if (updatedboard.hit !== true) {
      const newboard = props.player.aiattack(theplayerboard);
      setplayerboard([...newboard]);
      if (props.player.allshipssunk() === true) {
        props.setgameover(true);
        props.setwinner("AI won!!");
      }
    }
    return;
  };

  return (
    <div>
      <Grid
        testclick={testclick}
        playerboard={theplayerboard}
        aiboard={theaiboard}
      />
    </div>
  );
};

export default Gamecontroller;
