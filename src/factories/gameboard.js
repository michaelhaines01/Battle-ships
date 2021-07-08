import Ship from "./ships.js";

const Gameboard = () => {
  //maybe looks at this

  const ships = {
    carrier: Ship("carrier", 5),
    battleship: Ship("battleship", 4),
    destroyer: Ship("destroyer", 3),
    submarine: Ship("submarine", 3),
    patrolboat: Ship("patrolboat", 2),
  };

  const shipnames = Object.keys(ships);

  const createboard = () => {
    const boardobject = {
      ship: false,
      hit: false,
      display: "~",
    };
    return Array(10)
      .fill(boardobject)
      .map(() => Array(10).fill(boardobject));
  };

  let randomnumber = () => {
    const min = 0;
    const max = 9;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const receiveattack = (x, y, gameboard) => {
    let hit = true;
    if (gameboard[x][y].ship === true && gameboard[x][y].hit !== true) {
      //this should be the ship name and call ship hit
      ships[gameboard[x][y].display].hit(x);
      gameboard[x][y] = { ...gameboard[x][y], hit: true, display: "X" };
      return { gameboard, hit };
    } else {
      gameboard[x][y] = { ...gameboard[x][y], hit: true, display: "X" };
      hit = false;
      return { gameboard, hit };
    }
  };

  let aiattack = (gameboard) => {
    let aishot = false;
    let hit = true;
    let x = randomnumber();
    let y = randomnumber();
    while (aishot === false) {
      if (gameboard[x][y].ship === true && gameboard[x][y].hit !== true) {
        ships[gameboard[x][y].display].hit(x);
        gameboard[x][y] = { ...gameboard[x][y], hit: true, display: "X" };
        y = y + 1;
        continue;
      } else if (gameboard[x][y].ship === undefined) {
        y = randomnumber();
        continue;
      } // needs to know if undefined
      //needs to know if the spot has already been hit
      else if (gameboard[x][y].hit !== true) {
        gameboard[x][y] = { ...gameboard[x][y], hit: true, display: "X" };
        aishot = true;
      }
      x = randomnumber();
      y = randomnumber();
    }
    return gameboard;
  };

  const allshipssunk = () => {
    for (let i = 0; i < shipnames.length; i++) {
      if (ships[shipnames[i]].shipsunk() !== true) {
        return false;
      }
    }
    return true;
  };

  return { aiattack, ships, receiveattack, allshipssunk, createboard };
};

export default Gameboard;
