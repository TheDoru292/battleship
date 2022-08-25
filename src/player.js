const gameboard = require("./gameboard");

const player = (npc = undefined) => {
  let turn;
  let playerGameboard = gameboard();

  if (npc === undefined) {
    turn = true;
  } else {
    turn = false;
  }

  const onRun = () => {
    playerGameboard.onStart();
  };

  const getGameboard = () => {
    return playerGameboard;
  };

  const setTurn = (boolean) => {
    return (turn = boolean);
  };

  const attack = (npcObject, coordinate, shipCoordinate, shipName) => {
    let result;

    if (turn === true) {
      let opponentGameboard = npcObject.getGameboard();

      if (npc === true) {
        let randomCoordinate = Math.floor(
          Math.random() * (opponentGameboard.getGameboardSize() - 0 + 1) + 0
        );
        result = opponentGameboard.receiveAttack(randomCoordinate);
      } else {
        result = opponentGameboard.receiveAttack(
          coordinate,
          shipCoordinate,
          shipName
        );
      }

      npcObject.setTurn(true);
      setTurn(false);
    } else {
      result = "It's not your turn!";
    }

    return result;
  };

  return {
    onRun,
    attack,
    getGameboard,
    setTurn,
  };
};

module.exports = player;
