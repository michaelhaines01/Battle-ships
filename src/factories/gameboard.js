import Ship from "./ships.js";

const Gameboard = () => {
  /// Initialize in player

  const ships = {
    carrier: Ship("carrier", 5),
    battleship: Ship("battleship", 4),
    destroyer: Ship("destroyer", 3),
    submarine: Ship("submarine", 3),
    patrolboat: Ship("patrolboat", 2),
  };
  //this array in array must change again
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
    if (gameboard[x][y].ship === true && gameboard[x][y].hit !== true) {
      //this should be the ship name and call ship hit
      ships[gameboard[x][y].display].hit(x);
      //updates board
      gameboard[x][y] = { ...gameboard[x][y], hit: true, display: "X" };
      return gameboard;
    } else if (gameboard[x][y].hit !== true) {
      gameboard[x][y] = { ...gameboard[x][y], hit: true, display: "X" };
      return gameboard;
    }

    return gameboard;
  };

  //this is shit
  let aiattack = (gameboard) => {
    let aishot = false;
    let x = randomnumber();
    let y = randomnumber();
    while (aishot === false) {
      if (gameboard[x][y].ship === true && gameboard[x][y].hit !== true) {
        gameboard[x][y] = { ...gameboard[x][y], hit: true, display: "X" };
        aishot = true;
      } else if (gameboard[x][y].hit !== true) {
        gameboard[x][y] = { ...gameboard[x][y], hit: true, display: "X" };
        aishot = true;
      }
      return gameboard;
    }
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
