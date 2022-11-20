function sub(...args) {
  const result = args.reduce(function (acc, item) {
    return acc - item;
  });
  return result;
}
module.exports = sub;
