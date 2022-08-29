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
  }

  mainContainer.append(container);
}

function placeShipOnGameboard(playerName, shipName, startPoint, length) {
  const container = document.querySelector(`[data-gameboard="${playerName}"]`);

  for (let i = 0; 100 > i; i++) {
    let n = startPoint + length;
    if (inRange(i, startPoint, n - 1) === true) {
      let children = container.children;

      for (let j = 0; children.length > j; j++) {
        let cellId = children[j].getAttribute("data-cell-id");

        if (cellId == i) {
          const shipSomething = document.createElement("p");
          shipSomething.textContent = `${shipName[0]}`;
          shipSomething.dataset.ship = shipName;
          shipSomething.dataset.shipCell = i;

          children[j].append(shipSomething);

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

export { createGameboard, placeShipOnGameboard };
