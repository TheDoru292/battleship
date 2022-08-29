import { createGameboard } from "./dom";

const playerFactory = require("./classes/player");

let player;
let npc;

let playerGameboard;
let npcGameboard;

function initialize() {
  createPlayers();
  getGameboards();
  placeShips();
  createGameboards();
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
  npcGameboard.placeShip(10, 5, "Battleship");
  npcGameboard.placeShip(16, 3, "Destroyer");
  npcGameboard.placeShip(27, 3, "Submarine");
  npcGameboard.placeShip(50, 2, "PatrolBoat");

  playerGameboard.placeShip(3, 5, "Carrier");
  playerGameboard.placeShip(15, 5, "Battleship");
  playerGameboard.placeShip(26, 3, "Destroyer");
  playerGameboard.placeShip(50, 3, "Submarine");
  playerGameboard.placeShip(70, 2, "PatrolBoat");
}

export { initialize };
