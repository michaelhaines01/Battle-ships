import "../App.css";
import React, { useState } from "react";
import Grid from "../components/grid.js";
import Humanboard from "../components/humanboard.js";
import Playershiplist from "../components/playershiplist.js";
import Aishiplist from "../components/aishiplist";
import Messageboard from "../components/messageboard";

const Gamecontroller = (props) => {
  let playerboard = props.playerboard;
  let aiboard = props.aiboard;
  const [theaiboard, setaiboard] = useState(aiboard);
  const [theplayerboard, setplayerboard] = useState(playerboard);
  const [lastshot, setlastshot] = useState({ x: 1, y: 1 });
  const [hit, sethit] = useState(false);
  const [playersunkships, setsunkships] = useState([
    { ship: "battleship", sunk: false, long: 4 },
    { ship: "destroyer", sunk: false, long: 3 },
    { ship: "submarine", sunk: false, long: 3 },
    { ship: "patrolboat", sunk: false, long: 2 },
    { ship: "carrier", sunk: false, long: 5 },
  ]);
  const [aisunkships, setaisunkships] = useState([
    { ship: "battleship", sunk: false, long: 4 },
    { ship: "destroyer", sunk: false, long: 3 },
    { ship: "submarine", sunk: false, long: 3 },
    { ship: "patrolboat", sunk: false, long: 2 },
    { ship: "carrier", sunk: false, long: 5 },
  ]);
  const [turn, setturn] = useState(true);

  const checkwinner = () => {
    if (props.ai.allshipssunk() === true) {
      props.setgameover(true);
      props.setwinner("You win!!");
    } else if (props.player.allshipssunk() === true) {
      props.setgameover(true);
      props.setwinner("AI won!!");
    }
  };

  const testclick = (key, row) => {
    let updatedboard = props.ai.receiveattack(row, key, aiboard);

    setaiboard([...updatedboard.gameboard]);
    if (updatedboard.hit === true) {
      //this returns true or false if ship is sunk
      if (props.ai.isshipsunk(theaiboard[row][key].display) === true) {
        //update sunken state
        let index = playersunkships.findIndex((element) => {
          if (element.ship === theaiboard[row][key].display) {
            return true;
          }
        });
        handleAddplayer(index, playersunkships, setsunkships);
      }

      checkwinner();
    }
    setturn(false);

    setTimeout(function () {
      Handleai();
    }, 0);
  };

  const Handleai = () => {
    const newboard = props.player.aiattack(theplayerboard, lastshot, hit);
    setlastshot({ ...newboard.lastshot });
    setplayerboard([...newboard.gameboard]);
    sethit(newboard.hit);

    if (newboard.hit === true) {
      if (
        props.player.isshipsunk(
          theplayerboard[newboard.lastshot.x][newboard.lastshot.y].display
        ) === true
      ) {
        let indexai = aisunkships.findIndex((element) => {
          if (
            element.ship ===
            theplayerboard[newboard.lastshot.x][newboard.lastshot.y].display
          ) {
            return true;
          }
        });
        handleAddai(indexai);
      }
    }

    checkwinner();
    setturn(true);

    return;
  };

  const handleAddplayer = (index) => {
    let newsunkships = [...playersunkships];
    console.log(index);
    newsunkships[index] = { ...newsunkships[index], sunk: true };
    setsunkships([...newsunkships]);
    return;
  };
  const handleAddai = (index) => {
    let newaisunkships = [...aisunkships];
    console.log(index);
    newaisunkships[index] = { ...newaisunkships[index], sunk: true };
    setaisunkships([...newaisunkships]);
    return;
  };

  return (
    <div>
      <div className="board-container">
        <Grid testclick={testclick} aiboard={theaiboard} />
        <Messageboard turn={turn} setturn={setturn} />
        <Humanboard playerboard={playerboard} />
      </div>

      <div className="list-container">
        <Playershiplist playersunkships={playersunkships} />
        <Aishiplist aisunkships={aisunkships} />
      </div>
    </div>
  );
};

export default Gamecontroller;
