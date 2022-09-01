import { getPlayer } from "./game";

let playerObject;
let npcObject;

let playerTimeout = false;
let winner = false;

let playerSink;
let npcSink;

function domInitialize() {
  playerObject = getPlayer("player");
  npcObject = getPlayer("npc");
}

function changeDisplayText(string) {
  const display = document.querySelector(".display-text");

  display.textContent = string;
}

function createGameboard(playerName, object) {
  const mainContainer = document.querySelector(".game");

  const container = document.createElement("div");
  container.className = "gameboard";
  container.dataset.gameboard = `${playerName}`;

  for (let i = 0; object.getGameboard().getGameboardSize() > i; i++) {
    const cell = document.createElement("div");
    cell.dataset.cellId = i;
    cell.className = "cell";
    container.append(cell);

    let hit = false;

    cell.addEventListener("click", (e) => {
      if (hit === false && playerTimeout === false) {
        const text = document.createElement("p");

        let e2 = e.path[1];

        if (e.path[0].className === "cell") {
          e2 = undefined;
          text.textContent = "X";
          cell.append(text);
        } else {
          e.target.textContent = e.target.getAttribute("data-ship")[0];
        }

        let message = domAttack(
          container.getAttribute("data-gameboard"),
          e.path[0],
          e2
        );

        attackMessage(message);
        hit = true;

        playerSink = playerObject.getGameboard().allSunk();
        npcSink = npcObject.getGameboard().allSunk();

        console.log(playerSink, npcSink);

        changeDisplayText("Waiting for NPC's move.");
        playerTimeout = true;

        npcObject.attack(playerObject);
        changeDisplayText("Player, awaiting orders!");
        playerTimeout = false;

        setTimeout(() => {}, 500);
      } else if (playerTimeout === true) {
        changeDisplayText("Please wait until NPC's order!");
      } else {
        changeDisplayText("You can't hit the same cell twice!");
      }
    });
  }

  mainContainer.append(container);
}

function attackMessage(message) {
  if (message === "miss") {
    changeDisplayText("You missed!");
  } else if (message === "hit") {
    changeDisplayText("It's a hit!");
  } else {
    changeDisplayText("It's not your turn yet!");
  }
}

function domAttack(player, e1, e2) {
  let coordinate;
  let shipCoordinate;
  let shipName;

  if (e2 === undefined) {
    coordinate = e1.getAttribute("data-cell-id");
  } else {
    shipName = e1.getAttribute("data-ship");
    coordinate = e2.getAttribute("data-cell-id");
    shipCoordinate = e1.getAttribute("data-ship-cell");
  }

  if (player === "npc") {
    return playerObject.attack(npcObject, coordinate, shipCoordinate, shipName);
  }
}

function placeShipOnGameboard(playerName, shipName, startPoint, length) {
  const container = document.querySelector(`[data-gameboard="${playerName}"]`);
  let run = 0;

  for (let i = 0; 100 > i; i++) {
    let n = startPoint + length;
    if (inRange(i, startPoint, n - 1) === true) {
      let children = container.children;

      for (let j = 0; children.length > j; j++) {
        let cellId = children[j].getAttribute("data-cell-id");

        if (cellId == i) {
          const shipSomething = document.createElement("p");

          if (playerName === "npc") {
          } else {
            shipSomething.textContent = `${shipName[0]}`;
          }

          shipSomething.dataset.ship = shipName;
          shipSomething.dataset.shipCell = run;

          children[j].append(shipSomething);

          run += 1;

          continue;
        }
        if (cellId > i) {
          break;
        }
      }
    }
    if (i === 100 || i > n) {
      break;
    }
  }
}

function inRange(x, min, max) {
  return (x - min) * (x - max) <= 0;
}

export {
  changeDisplayText,
  createGameboard,
  placeShipOnGameboard,
  domInitialize,
};
