const calc = createCalculator(100);
const calc1 = createCalculator(1000);

function createCalculator(val) {
  return {
    add: (val2) => {
      return (val = val + val2);
    },
    sub: (val2) => {
      return (val = val - val2);
    },
    div: (val2) => {
      return (val = val / val2);
    },
    mult: (val2) => {
      return (val = val * val2);
    },
    set: (val2) => {
      return (val = val2);
    },
  };
}
