const ship = (length) => {
  array = [];

  const hit = (n) => {
    if (array.length === 0) {
      createArray();
      realHit(n);
    } else {
      realHit(n);
    }
    return array;
  };

  const getArray = () => {
    return array;
  };

  const realHit = (n) => {
    return (array[n] = "hit");
  };

  const createArray = () => {
    for (let i = 0; length > i; i++) {
      array.push("");
    }
  };

  const isSunk = () => {
    for (let i = length - 1; array.length >= i; i--) {
      if (i == 0) {
        if (array[i] === "hit") {
          return true;
        }
        return false;
      }
      if (array[i] === "hit") {
        continue;
      } else {
        return false;
      }
    }

    console.log(array);
  };

  return {
    length,
    hit,
    isSunk,
    getArray,
  };
};

module.exports = ship;
