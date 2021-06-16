import Player from "../factories/player.js";

test("test random number", () => {
  let player = Player();

  expect(player.randomnumber()).toEqual(expect.any(Number));
});

test("test ai function", () => {
  let player = Player();
  player.aiattack();
  player.aiattack();
  player.aiattack();
  player.aiattack();
  player.aiattack();
  player.aiattack();
  expect(player.aiattack()).toEqual(expect.any(Number));
});
