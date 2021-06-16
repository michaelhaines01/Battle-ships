import Gameboard from "../factories/gameboard.js";

test("Test gameboard creation", () => {
  let board = Gameboard();

  expect(board.board.length).toBe(10);
});

test("display", () => {
  let board = Gameboard();
  board.placeships();
  expect(board.display()).toBe("hi");
});

test("placeships", () => {
  let board = Gameboard();
  board.placeships();

  expect(board.board[0][1].ship).toBe(true);
});

test("Gameboard receives attack", () => {
  let board = Gameboard();
  board.placeships();
  board.receiveattack(0, 1), expect(board.board[0][1].ship).toBe(true);
});

test("test if ships sunk ", () => {
  let board = Gameboard();
  board.placeships();
  board.receiveattack(0, 1);
  board.receiveattack(0, 2);
  board.receiveattack(0, 3);
  board.receiveattack(0, 4);
  board.receiveattack(0, 5);

  expect(board.ships.carrier.shipsunk()).toBe(true);
});
