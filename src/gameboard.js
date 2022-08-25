const ship = require("./ship.js");

const Gameboard = () => {
  let firstRun = true;
  let gameboardArray = [];

  let carrier = ship(5);
  let battleship = ship(5);
  let destroyer = ship(3);
  let submarine = ship(3);
  let patrolBoat = ship(2);

  const onStart = () => {
    if (firstRun === true) {
      let cells = 10;

      for (let i = 0; cells > i; i++) {
        gameboardArray.push("");
      }
    } else {
      return "Cannot run it twice bud";
    }
    firstRun = false;
    return gameboardArray;
  };

  const placeShip = (cell, length, shipName) => {
    determineVariable(shipName);
    _addShipToArray(cell, length, shipName);
    return gameboardArray;
  };

  const determineVariable = (shipName) => {
    switch (shipName) {
      case "Carrier":
        return carrier;
      case "Battleship":
        return battleship;
      case "Destroyer":
        return destroyer;
      case "Submarine":
        return submarine;
      case "PatrolBoat":
        return patrolBoat;
      default:
        return "Error!";
    }
  };

  const receiveAttack = (coordinate, shipCoordinate, shipName) => {
    // shipCoordinate should be inside the div for the ship element
    // first box of the ship = 0, second box = 1, etc, etc, this will be defiend with data-ship-id
    let inArray = gameboardArray[coordinate];

    if (inArray !== "") {
      let shipObject = determineVariable(shipName);
      shipObject.hit(shipCoordinate);

      gameboardArray[coordinate] = `${inArray} - hit`;
    } else {
      gameboardArray[coordinate] = "hit";
    }

    return gameboardArray;
  };

  const _addShipToArray = (cell, length, shipName) => {
    do {
      gameboardArray[cell] = shipName;

      cell++;
      length--;
    } while (0 < length);
  };

  const allSunk = () => {
    let array = [
      `${carrier.isSunk()}`,
      `${battleship.isSunk()}`,
      `${destroyer.isSunk()}`,
      `${submarine.isSunk()}`,
      `${patrolBoat.isSunk()}`,
    ];

    let trueArray = ["true", "true", "true", "true", "true"];

    let result = arrayEquals(array, trueArray);

    return result;
  };

  const arrayEquals = (a, b) => {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  };

  return {
    onStart,
    placeShip,
    receiveAttack,
    allSunk,
  };
};

module.exports = Gameboard;
