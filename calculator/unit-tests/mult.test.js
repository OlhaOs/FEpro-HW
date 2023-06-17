const mult = require('../mult');

test('multiplication 2 * 2 to equal 4', () => {
  expect(mult(2, 2)).toBe(4);
});
test('multiplication 2 * 2 * 10 to equal 40', () => {
  expect(mult(2, 2, 10)).toBe(40);
});
