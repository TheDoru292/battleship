const ship = require("./ship");

const damnThatShip = ship(2);

test("ship length", () => {
  expect(damnThatShip.length).toBe(2);
});

test("ship getting hit", () => {
  expect(damnThatShip.hit(1)).toBe(["", "hit"]);
});
