import "./playergrid.css";
import React, { useState } from "react";
import Player from "../factories/player";
import Gamecontroller from "../gamelogic/gamecontroller.js";
import Singleboard from "../components/singleboard.js";
import Gameboard from "../factories/gameboard.js";

const Placeships = (props) => {
  const player = Gameboard();
  const ai = Gameboard();

  let theships = [
    {
      ship: "carrier",
      long: 5,
      cords: [],
    },
    {
      ship: "battleship",
      long: 4,
      cords: [],
    },
    {
      ship: "destroyer",
      long: 3,
      cords: [],
    },
    {
      ship: "submarine",
      long: 3,
      cords: [],
    },
    {
      ship: "patrolboat",
      long: 2,
      cords: [],
    },
  ];

  //get blank board
  let blankboard1 = Gameboard().createboard();

  const [playerboard, setplayerboard] = useState(blankboard1);
  const [aiboard, setaiboard] = useState(blankboard1);

  const [start, setstart] = useState(false);

  let randomnumber = () => {
    const min = 0;
    const max = 9;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const checkvalid = (newcord, blankboard) => {
    let truthy = true;
    newcord.map(([a, b]) => {
      if (blankboard[a][b] === undefined || blankboard[a][b].ship === true) {
        return (truthy = false);
      }
    });
    return truthy;
  };

  const placeships = (ship, blankboard) => {
    console.log(ship);
    for (let i = 0; i < ship.cords[0].length; i++) {
      //work out whats going on here
      let y = ship.cords[0][i][0];
      let x = ship.cords[0][i][1];
      blankboard[x][y] = {
        ...blankboard[x][y],
        ship: true,
        display: ship.ship,
      };
    }

    return blankboard;
  };

  const setcord = () => {
    let blankboard = Gameboard().createboard();

    theships.forEach((ship) => {
      let startcord = randomnumber();
      let y = randomnumber();

      let newcord = [];
      let i = 0;
      while (i < ship.long) {
        //this is broken
        if (checkvalid([[y, startcord + i]], blankboard) === true) {
          newcord.push([y, startcord + i]);
          i++;
        } else {
          startcord = randomnumber();
          y = randomnumber();
          i = 0;
          newcord = [];
        }
      }
      ship.cords.push(newcord);
      placeships(ship, blankboard);
    });
    return blankboard;
  };

  const handleclick = () => {
    let x = setcord();
    setplayerboard([...x]);
    let y = setcord();

    setaiboard([...y]);
  };

  return (
    <div>
      {!start && <Singleboard board={playerboard} setcord={setcord} />}
      <div>
        {start && (
          <Gamecontroller
            playerboard={playerboard}
            aiboard={aiboard}
            player={player}
            ai={ai}
            setgameover={props.setgameover}
            setwinner={props.setwinner}
          />
        )}
        <button onClick={() => setstart(true)}>Start game</button>
        <div>
          <button onClick={() => handleclick()}>Random ships</button>
        </div>
      </div>
    </div>
  );
};

export default Placeships;
