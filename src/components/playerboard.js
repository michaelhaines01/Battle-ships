import "./playergrid.css";
import React, { useState } from "react";
import Player from "../factories/player";
import Gamecontroller from "../gamelogic/gamecontroller.js";
import Singleboard from "../components/singleboard.js";

const Placeships = (props) => {
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
      ship: "partrolboat",
      long: 2,
      cords: [],
    },
  ];
  let players = Player(theships);
  //this is ridculous
  let board = players.player.getboard().board;
  const [place, setplace] = useState(0);
  const [start, setstart] = useState(false);

  let randomnumber = () => {
    const min = 0;
    const max = 9;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const checkvalid = (newcord) => {
    let truthy = true;
    newcord.map(([a, b]) => {
      if (board[a][b] === undefined || board[a][b].ship === true) {
        return (truthy = false);
      }
    });
    return truthy;
  };

  const placeships = (ship) => {
    for (let i = 0; i < ship.cords[0].length; i++) {
      //work out whats going on here
      let x = ship.cords[0][i][0];
      let y = ship.cords[0][i][1];
      board[x][y] = {
        ...board[x][y],
        ship: true,
        display: ship.ship,
      };
    }

    return board;
  };

  const setcord = () => {
    theships.forEach((ship) => {
      let startcord = randomnumber();
      let y = randomnumber();
      let newcord = [];
      let i = 0;
      while (i < ship.long) {
        if (checkvalid([[y, startcord + i]]) === true) {
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
      placeships(ship);
    });
  };
  setcord();
  console.log(board);

  return (
    <div>
      {!start && <Singleboard setplace={setplace} board={board} />}

      <div>
        {start && (
          <Gamecontroller
            setrestart={props.setrestart}
            players={players}
            theships={theships}
          />
        )}
        <button onClick={() => setstart(true)}>Start game</button>
      </div>
    </div>
  );
};

export default Placeships;
