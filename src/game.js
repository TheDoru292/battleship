import {
  changeDisplayText,
  createGameboard,
  domInitialize,
  placeShipOnGameboard,
} from "./dom";

const playerFactory = require("./classes/player");

let player;
let npc;

let playerGameboard;
let npcGameboard;

function initialize() {
  createPlayers();
  getGameboards();
  domInitialize();
  createGameboards();
  placeShips();
  changeDisplayText("Player, awaiting orders!");
}

function getPlayer(playerName) {
  if (playerName === "player") {
    return player;
  } else {
    return npc;
  }
}

function getGameboards() {
  playerGameboard = player.getGameboard();
  npcGameboard = npc.getGameboard();
}

function createPlayers() {
  player = playerFactory();
  npc = playerFactory(true);

  player.onRun();
  npc.onRun();
}

function createGameboards() {
  createGameboard("player", player);
  createGameboard("npc", npc);
}

function placeShips() {
  npcGameboard.placeShip(1, 5, "Carrier");
  placeShipOnGameboard("npc", "Carrier", 1, 5);
  npcGameboard.placeShip(10, 5, "Battleship");
  placeShipOnGameboard("npc", "Battleship", 10, 5);
  npcGameboard.placeShip(16, 3, "Destroyer");
  placeShipOnGameboard("npc", "Destroyer", 16, 3);
  npcGameboard.placeShip(27, 3, "Submarine");
  placeShipOnGameboard("npc", "Submarine", 26, 3);
  npcGameboard.placeShip(50, 2, "PatrolBoat");
  placeShipOnGameboard("npc", "PatrolBoat", 50, 2);

  playerGameboard.placeShip(3, 5, "Carrier");
  placeShipOnGameboard("player", "Carrier", 3, 5);
  playerGameboard.placeShip(15, 5, "Battleship");
  placeShipOnGameboard("player", "Battleship", 14, 5);
  playerGameboard.placeShip(26, 3, "Destroyer");
  placeShipOnGameboard("player", "Destroyer", 25, 3);
  playerGameboard.placeShip(50, 3, "Submarine");
  placeShipOnGameboard("player", "Submarine", 50, 3);
  playerGameboard.placeShip(70, 2, "PatrolBoat");
  placeShipOnGameboard("player", "PatrolBoat", 70, 2);
}

export { initialize, getPlayer };
