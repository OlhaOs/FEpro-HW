const add = require('../add');
test('add 1 + 2 + 3 to equal 6', () => {
  expect(add(1, 2, 3)).toBe(6);
});
test('add 1 + 2 + 3 + 4 to equal 10', () => {
  expect(add(1, 2, 3, 4)).toBe(10);
});
