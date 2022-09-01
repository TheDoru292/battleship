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
      let cells = 100;

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
    getShip(shipName);
    _addShipToArray(cell, length, shipName);
    return gameboardArray;
  };

  const getShip = (shipName) => {
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

    let result;

    if (inArray !== "") {
      if (shipCoordinate === "npc") {
        console.log(inArray);
        let ships = inArray.split(" ");
        console.log(ships[0]);
        let shipObject = getShip(ships[0]);

        console.log(shipObject.isSunk());

        shipObject.hit(ships[1]);
      } else {
        let shipObject = getShip(shipName);
        shipObject.hit(shipCoordinate);
        console.log(shipObject.isSunk(), shipObject.getArray());
      }
      gameboardArray[coordinate] = `${inArray} - hit`;
      result = "hit";
    } else {
      gameboardArray[coordinate] = "hit";
      result = "miss";
    }

    return result;
  };

  const _addShipToArray = (cell, length, shipName) => {
    let i = 1;
    do {
      gameboardArray[cell] = `${shipName} ${i}`;

      cell++;
      i++;
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

    console.log(carrier.isSunk());
    console.log(battleship.isSunk());

    let trueArray = ["true", "true", "true", "true", "true"];

    let result = array;

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

  const getGameboardSize = () => {
    return gameboardArray.length;
  };

  const getGameboardArray = () => {
    return gameboardArray;
  };

  return {
    onStart,
    placeShip,
    receiveAttack,
    allSunk,
    getGameboardSize,
    getGameboardArray,
  };
};

module.exports = Gameboard;
