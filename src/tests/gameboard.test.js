const gameboard = require("../gameboard");

const playerGameboard = gameboard();

test("on start call creates 10 spaces for ships", () => {
  expect(playerGameboard.onStart()).toEqual([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
});

test("checks if onStart() cannot be run twice", () => {
  expect(playerGameboard.onStart()).toBe("Cannot run it twice bud");
});

test("place ship on the first 5 cells (ship size is 5)", () => {
  expect(playerGameboard.placeShip(0, 5, "Carrier")).toEqual([
    "Carrier",
    "Carrier",
    "Carrier",
    "Carrier",
    "Carrier",
    "",
    "",
    "",
    "",
    "",
  ]);
});

test("calls receiveAttack() with coordinates of a ship and hits it", () => {
  expect(playerGameboard.receiveAttack(0, 0, "Carrier")).toEqual([
    "Carrier - hit",
    "Carrier",
    "Carrier",
    "Carrier",
    "Carrier",
    "",
    "",
    "",
    "",
    "",
  ]);
});

test("calls receiveAttack() with coordinates of a ship and hits it", () => {
  expect(playerGameboard.receiveAttack(7)).toEqual([
    "Carrier - hit",
    "Carrier",
    "Carrier",
    "Carrier",
    "Carrier",
    "",
    "",
    "hit",
    "",
    "",
  ]);
});

test("checks if every ship has been sunk in a gameboard", () => {
  expect(playerGameboard.allSunk()).toBe(false);
});
