const ship = require("./ship");

const damnThatShip = ship(2);

test("ship length", () => {
  expect(damnThatShip.length).toBe(2);
});

test("ship getting hit", () => {
  expect(damnThatShip.hit(1)).toEqual(["", "hit"]);
});

test("second time ship getting hit", () => {
  expect(damnThatShip.hit(0)).toEqual(["hit", "hit"]);
});
