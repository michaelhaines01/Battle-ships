import Gameboard from "./gameboard.js";

const Player = () => {
  const playerfactory = (name, board, aiboard) => {
    const getname = () => name;
    const getboard = () => board;
    const getaiboard = () => aiboard;
    return { getname, getboard, getaiboard };
  };
  //initalize game boards

  let playerboard = Gameboard();
  let aiboard = Gameboard();
  //initalize player
  let player = playerfactory("You", playerboard, aiboard);

  let randomnumber = () => {
    const min = 0;
    const max = 9;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  //this is shit
  let aiattack = () => {
    let aishot = false;
    let x = randomnumber();
    let y = randomnumber();
    while (aishot === false) {
      if (player.getboard().receiveattack(x, y) !== false) {
        aishot = true;
        return aishot;
      }
      return false;
    }
  };

  return { aiattack, player, aiboard };
};
export default Player;
