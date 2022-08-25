const player = require("../player");

const actualPlayer = player();
const npc = player(true);

let npcGameboard = npc.getGameboard();
npcGameboard.onStart();
npcGameboard.placeShip(0, 5, "Carrier");

let playerGameboard = actualPlayer.getGameboard();
playerGameboard.onStart();
playerGameboard.placeShip(1, 5, "Carrier");

test("player attacks the npc at coordinates 0, carrier ship", () => {
  expect(actualPlayer.attack(npc, 0, 0, "Carrier")).toEqual([
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

test("player should not be able to do 2 attacks in a row", () => {
  expect(actualPlayer.attack(npc, 0, 0, "Carrier")).toBe("It's not your turn!");
});

test("npc attacks the player at coordinates 0", () => {
  expect(npc.attack(actualPlayer, 0)).toEqual([
    "hit",
    "Carrier",
    "Carrier",
    "Carrier",
    "Carrier",
    "Carrier",
    "",
    "",
    "",
    "",
  ]);
});

test("npc should not be able to attack twice in a row", () => {
  expect(npc.attack(actualPlayer, 0)).toBe("It's not your turn!");
});

test("last player attack test, coordinate 1, ship carrier", () => {
  expect(actualPlayer.attack(npc, 1, 0, "Carrier")).toEqual([
    "Carrier - hit",
    "Carrier - hit",
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
