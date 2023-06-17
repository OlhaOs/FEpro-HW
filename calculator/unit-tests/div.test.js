const div = require('../div');
test('division 10 / 2 to equal 5 ', () => {
  expect(div(10, 2)).toBe(5);
});
test('division 20 / 5 / 2 to equal 2 ', () => {
  expect(div(20, 5, 2)).toBe(2);
});
