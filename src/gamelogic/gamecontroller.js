import React, { useState } from "react";
import Grid from "../components/grid.js";
import Gameover from "../components/gameover.js";
import Gameboard from "../factories/gameboard.js";

const Gamecontroller = (props) => {
  let playerboard = props.playerboard;
  let aiboard = props.aiboard;
  const [theaiboard, setaiboard] = useState(aiboard);
  const [theplayerboard, setplayerboard] = useState(playerboard);
  const [gameover, setgameover] = useState(false);

  const restart = () => {
    props.setstart(false);
    setgameover(false);
  };

  const testclick = (key, row) => {
    //initailize
    let updatedboard = props.ai.receiveattack(row, key, aiboard);
    setaiboard([...updatedboard]);
    if (props.ai.allshipssunk() === true) {
      props.setstart(false);
      props.setgameover(true);
      console.log("gameover");
    }

    const newboard = props.player.aiattack(theplayerboard);
    setplayerboard([...newboard]);
    return;
  };

  return (
    <div>
      {!gameover && (
        <Grid
          testclick={testclick}
          playerboard={theplayerboard}
          aiboard={theaiboard}
        />
      )}
      {gameover && <Gameover restart={restart} />}
    </div>
  );
};

export default Gamecontroller;
