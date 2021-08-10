import Gameboard from "../factories/gameboard.js";

describe("Gameboard testing", () => {
  let gameboard;
  let x;
  let y;
  beforeEach(() => {
    gameboard = Gameboard();
  });

  test("Test gameboard creation", () => {
    expect(gameboard.createboard().length).toBe(10);
  });

  test("Gameboard receives attack", () => {
    x = 0;
    y = 0;
    let board = gameboard.createboard();
    gameboard.receiveattack(x, y, board), expect(board[0][0].hit).toBe(true);
  });
});
