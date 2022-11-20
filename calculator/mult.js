function mult(...args) {
  const result = args.reduce(function (acc, item) {
    return acc * item;
  });
  return result;
}
module.exports = mult;
