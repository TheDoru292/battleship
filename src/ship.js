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

  const realHit = (n) => {
    return (array[n] = "hit");
  };

  const createArray = () => {
    for (let i = 0; length > i; i++) {
      array.push("");
    }
  };

  return {
    length,
    hit,
  };
};

// class Ship {
//   array = [];
//   constructor(length) {
//     this.length = length;
//   }
//   hit(n) {
//     if(this.array.length === 0) {

//     }
//   }
// }

module.exports = ship;