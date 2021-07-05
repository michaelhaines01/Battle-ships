import Ship from "./ships.js";
import Player from "./player.js";
const Gameboard = () => {
  /// Initialize in player
  //this is obsolete
  const ships = {
    carrier: Ship("carrier", 5),
    battleship: Ship("battleship", 4),
    destroyer: Ship("destroyer", 3),
    submarine: Ship("submarine", 3),
    patrolboat: Ship("patrolboat", 2),
  };
  //this array in array must change again
  const shipnames = Object.keys(ships);

  const boardobject = {
    ship: false,
    hit: false,
    display: "~",
  };

  const createboard = () => {
    return Array(10)
      .fill(boardobject)
      .map(() => Array(10).fill(boardobject));
  };
  let board = createboard();
  // this is what translates to ship storage
  //Just change this then change formatt
  /*const placeships = () => {
    for (let i = 0; i < shipnames.length; i++) {
      ships[shipnames[i]].shipcords.map(
        ([a, b]) =>
          (board[a][b] = {
            ...board[a][b],
            ship: true,
            display: shipnames[i],
          })
      );
    }
    return board;
  };*/

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

  const allshipssunk = () => {
    for (let i = 0; i < shipnames.length; i++) {
      if (ships[shipnames[i]].shipsunk() !== true) {
        return false;
      }
    }
    return true;
  };

  const display = () => {
    let display = [];
    for (let i = 0; i < board.length; i++) {
      for (let y = 0; y < board.length; y++) {
        display.push(board[i][y].display);
      }
    }
    return display;
  };

  return {
    board,

    display,
    ships,
    receiveattack,
    allshipssunk,
    createboard,
  };
};

export default Gameboard;
