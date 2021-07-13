import React, { useState } from "react";
import Grid from "../components/grid.js";
import Gameover from "../components/gameover.js";
import Gameboard from "../factories/gameboard.js";
import Playershiplist from "../components/playershiplist.js";
import Aishiplist from "../components/aishiplist";
const Gamecontroller = (props) => {
  let playerboard = props.playerboard;
  let aiboard = props.aiboard;
  const [theaiboard, setaiboard] = useState(aiboard);
  const [theplayerboard, setplayerboard] = useState(playerboard);
  const [lastshot, setlastshot] = useState(-1);
  const [hit, sethit] = useState(false);
  const [playersunkships, setsunkships] = useState([
    { ship: "battleship", sunk: false },
    { ship: "destroyer", sunk: false },
    { ship: "submarine", sunk: false },
    { ship: "patrolboat", sunk: false },
  ]);
  const [aisunkships, setaisunkships] = useState([
    { ship: "battleship", sunk: false },
    { ship: "destroyer", sunk: false },
    { ship: "submarine", sunk: false },
    { ship: "patrolboat", sunk: false },
  ]);

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
    setTimeout(function () {
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

      //ai

      const newboard = props.player.aiattack(theplayerboard, lastshot, hit);
      setlastshot({ ...newboard.lastshot });
      setplayerboard([...newboard.gameboard]);
      console.log(lastshot);
      sethit(newboard.hit);
      console.log(lastshot.x);
      if (newboard.hit === true) {
        try {
          if (
            props.player.isshipsunk(
              theplayerboard[newboard.lastshot.x][newboard.lastshot.y].display
            ) === true
          ) {
            let index = aisunkships.findIndex((element) => {
              if (
                element.ship === theplayerboard[lastshot.x][lastshot.y].display
              ) {
                return true;
              }
              console.log(index);
              handleAddai(index);
            });
          }
        } catch (err) {
          console.log("try again");
          return;
        }
      }
      checkwinner();

      return;
    }, 0);
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
      <Grid
        testclick={testclick}
        playerboard={theplayerboard}
        aiboard={theaiboard}
      />
      <Playershiplist playersunkships={playersunkships} />
      <Aishiplist aisunkships={aisunkships} />
    </div>
  );
};

export default Gamecontroller;
