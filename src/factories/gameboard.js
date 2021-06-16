import Ship from "./ships.js";

const Gameboard = () => {
  const ships = {
    carrier: Ship("carrier", [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
    ]),
    battleship: Ship("battleship", [
      [0, 6],
      [0, 7],
      [0, 8],
      [0, 9],
    ]),
    destroyer: Ship("destroyer", [
      [1, 1],
      [1, 2],
      [1, 3],
    ]),
    submarine: Ship("submarine", [
      [2, 0],
      [3, 0],
      [4, 0],
    ]),
    patrolboat: Ship("patrolboat", [
      [5, 0],
      [6, 0],
    ]),
  };

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

  const placeships = () => {
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
  };

  const receiveattack = (x, y) => {
    if (board[x][y].ship === true && board[x][y].hit !== true) {
      //this should be the ship name and call ship hit
      ships[board[x][y].display].hit(x, y);
      //updates board
      board[x][y] = { ...board[x][y], hit: true, display: "X" };
      return true;
    }

    //this is new
    else if (board[x][y].hit !== true) {
      board[x][y] = { ...board[x][y], hit: true, display: "X" };
      return false;
    }

    return false;
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

  return { board, placeships, display, ships, receiveattack, allshipssunk };
};

export default Gameboard;
