function createGameboard(playerName, object) {
  const mainContainer = document.querySelector(".game");

  const container = document.createElement("div");
  container.className = "gameboard";
  container.dataset.gameboardPlayer = `${playerName}`;

  for (let i = 0; object.getGameboard().getGameboardSize() > i; i++) {
    const cell = document.createElement("div");
    cell.dataset.cellId = i;
    cell.className = "cell";
    container.append(cell);
  }

  mainContainer.append(container);
}

export { createGameboard };
