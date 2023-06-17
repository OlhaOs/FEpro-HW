const sub = require('../sub');

test('subtraction 10 - 2 to equal 8', () => {
  expect(sub(10, 2)).toBe(8);
});
test('subtraction 10 - 2 - 5 to equal 3', () => {
  expect(sub(10, 2, 5)).toBe(3);
});
