import "./placeships.scss";
import React, { useState } from "react";
import Player from "../factories/player";
import Gamecontroller from "../gamelogic/gamecontroller.js";
import Singleboard from "../components/singleboard.js";
import Gameboard from "../factories/gameboard.js";

const Placeships = (props) => {
  const player = Gameboard();
  const ai = Gameboard();

  const theships = [
    {
      ship: "carrier",
      long: 5,
      cords: [],
      vertical: true,
    },
    {
      ship: "battleship",
      long: 4,
      cords: [],
      vertical: false,
    },
    {
      ship: "destroyer",
      long: 3,
      cords: [],
      vertical: true,
    },
    {
      ship: "submarine",
      long: 3,
      cords: [],
      vertical: false,
    },
    {
      ship: "patrolboat",
      long: 2,
      cords: [],
      vertical: true,
    },
  ];
  const aiships = [
    {
      ship: "carrier",
      long: 5,
      cords: [],
      vertical: true,
    },
    {
      ship: "battleship",
      long: 4,
      cords: [],
      vertical: false,
    },
    {
      ship: "destroyer",
      long: 3,
      cords: [],
      vertical: true,
    },
    {
      ship: "submarine",
      long: 3,
      cords: [],
      vertical: false,
    },
    {
      ship: "patrolboat",
      long: 2,
      cords: [],
      vertical: true,
    },
  ];

  const blankboard1 = Gameboard().createboard();
  const [playerboard, setplayerboard] = useState(blankboard1);
  const [aiboard, setaiboard] = useState(blankboard1);
  const [start, setstart] = useState(false);
  const [shipsplaced, setshipsplace] = useState(false);

  const randomnumber = () => {
    const min = 0;
    const max = 9;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomxy = () => {
    const random = ["true", "false"][Math.round(Math.random())];
    return random;
  };

  const checkvalid = (newcord, blankboard) => {
    let truthy = true;

    newcord.map(([a, b]) => {
      if (a === 10 || b === 10) {
        return (truthy = false);
      } else if (blankboard[a][b].ship === true) {
        return (truthy = false);
      }
    });
    return truthy;
  };

  const placeships = (ship, blankboard) => {
    console.log(ship);
    for (let i = 0; i < ship.cords[0].length; i++) {
      //work out whats going on here
      let x = ship.cords[0][i][0];
      let y = ship.cords[0][i][1];
      blankboard[x][y] = {
        ...blankboard[x][y],
        ship: true,
        display: ship.ship,
      };
    }

    return blankboard;
  };

  const setcord = (ships) => {
    let blankboard = Gameboard().createboard();

    ships.forEach((ship, index) => {
      let startcord = randomnumber();
      let y = randomnumber();

      ships[index] = { ...ships[index], vertical: randomxy() };
      let newcord = [];
      let i = 0;

      while (i < ship.long) {
        if (ship.vertical === true) {
          if (checkvalid([[y, startcord + i]], blankboard) === true) {
            newcord.push([y, startcord + i]);
            i++;
          } else {
            startcord = randomnumber();
            y = randomnumber();
            i = 0;
            newcord = [];
          }
        } else {
          if (checkvalid([[y + i, startcord]], blankboard) === true) {
            newcord.push([y + i, startcord]);
            i++;
          } else {
            startcord = randomnumber();
            y = randomnumber();
            i = 0;
            newcord = [];
          }
        }
      }
      ship.cords.push(newcord);
      placeships(ship, blankboard);
      setshipsplace(true);
    });
    return blankboard;
  };

  const handleclick = () => {
    let playerset = setcord(theships);
    setplayerboard([...playerset]);

    let aiset = setcord(aiships);
    setaiboard([...aiset]);
  };

  return (
    <div>
      {!start && <Singleboard board={playerboard} setcord={setcord} />}

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
      <div className={"button-container " + (start && "active")}>
        {!start && (
          <button className="place-btn" onClick={() => handleclick()}>
            Place ships
          </button>
        )}
        {!start && shipsplaced && (
          <button className="start-btn" onClick={() => setstart(true)}>
            Start game!
          </button>
        )}
      </div>
    </div>
  );
};

export default Placeships;
