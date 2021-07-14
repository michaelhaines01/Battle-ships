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
      gameboard[x][y] = { ...gameboard[x][y], hit: true };
      return { gameboard, hit };
    } else {
      gameboard[x][y] = { ...gameboard[x][y], hit: true };
      hit = false;
      return { gameboard, hit };
    }
  };

  let aiattack = (gameboard, lastshot, hit) => {
    console.log(lastshot);
    console.log(hit);

    if (
      gameboard[lastshot.x + 1][lastshot.y].ship === true &&
      gameboard[lastshot.x + 1][lastshot.y].hit !== true
    ) {
      lastshot = { x: lastshot.x + 1, y: lastshot.y };
      ships[gameboard[lastshot.x + 1][lastshot.y].display].hit(lastshot.x + 1);
      gameboard[lastshot.x + 1][lastshot.y] = {
        ...gameboard[lastshot.x + 1][lastshot.y],
        hit: true,
      };
    } else if (
      gameboard[lastshot.x - 1][lastshot.y].ship === true &&
      gameboard[lastshot.x - 1][lastshot.y].hit !== true
    ) {
      lastshot = { x: lastshot.x - 1, y: lastshot.y };
      ships[gameboard[lastshot.x - 1][lastshot.y].display].hit("hit");
      gameboard[lastshot.x - 1][lastshot.y] = {
        ...gameboard[lastshot.x - 1][lastshot.y],
        hit: true,
      };
    } else if (
      gameboard[lastshot.x][lastshot.y + 1].ship === true &&
      gameboard[lastshot.x][lastshot.y + 1].hit !== true
    ) {
      lastshot = { x: lastshot.x, y: lastshot.y + 1 };
      ships[gameboard[lastshot.x][lastshot.y + 1].display].hit("hit");
      gameboard[lastshot.x][lastshot.y + 1] = {
        ...gameboard[lastshot.x][lastshot.y + 1],
        hit: true,
      };
    } else if (
      gameboard[lastshot.x][lastshot.y - 1].ship === true &&
      gameboard[lastshot.x][lastshot.y - 1].hit !== true
    ) {
      lastshot = { x: lastshot.x, y: lastshot.y - 1 };
      ships[gameboard[lastshot.x][lastshot.y - 1].display].hit("hit");
      gameboard[lastshot.x][lastshot.y - 1] = {
        ...gameboard[lastshot.x][lastshot.y - 1],
        hit: true,
      };
    } else {
      lastshot = { x: randomnumber(), y: randomnumber() };
      gameboard[lastshot.x][lastshot.y] = {
        ...gameboard[lastshot.x][lastshot.y],
        hit: true,
        display: "X",
      };
      return { gameboard, lastshot, hit };
    }

    //must update (the gameboard)
    //lastshot : {x:x,y:y}
    //hit : true ,false

    //if (gameboard[x][y].ship === true && gameboard[x][y].hit !== true) {
    //ships[gameboard[x][y].display].hit(x);
    //send last shot maybe
    // gameboard[x][y] = { ...gameboard[x][y], hit: true };

    return { gameboard, lastshot, hit };
  };

  const allshipssunk = () => {
    for (let i = 0; i < shipnames.length; i++) {
      if (ships[shipnames[i]].shipsunk() !== true) {
        return false;
      }
    }
    return true;
  };

  const isshipsunk = (shipname) => {
    if (ships[shipname].shipsunk() !== true) {
      return false;
    }
    return true;
  };

  return {
    aiattack,
    ships,
    receiveattack,
    allshipssunk,
    createboard,
    isshipsunk,
  };
};

export default Gameboard;
