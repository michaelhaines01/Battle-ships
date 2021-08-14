import Ship from "../factories/ships.js";

describe("shiptesting", () => {
  let testcarrier;

  beforeEach(() => {
    testcarrier = Ship("carrier", 5);
  });

  test("check ship name", () => {
    expect(testcarrier.shipname).toEqual("carrier");
  });

  test("test if ship is hit", () => {
    expect(testcarrier.hit([0, 1])).toEqual([[0, 1]]);
  });

  test("Test multiple hits", () => {
    testcarrier.hit([0, 1]);
    testcarrier.hit([0, 2]);
    testcarrier.hit([0, 3]);
    expect(testcarrier.hit([0, 4]).length).toEqual(4);
  });

  test("Ship sunk", () => {
    testcarrier.hit([0, 1]);
    testcarrier.hit([0, 2]);
    testcarrier.hit([0, 3]);
    testcarrier.hit([0, 4]);
    testcarrier.hit([0, 5]);
    expect(testcarrier.shipsunk()).toBeTruthy();
  });
  test("Test if ship is sunk with out all hits", () => {
    testcarrier.hit([0, 1]);
    testcarrier.hit([0, 2]);
    testcarrier.hit([0, 3]);
    testcarrier.hit([0, 4]);
    expect(testcarrier.shipsunk()).toBeFalsy();
  });
});
