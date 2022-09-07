const action = getAction();
const arrStr = getNumbers().split(",");

const arrNew = arrStr.map(function (item) {
  return +item;
});

const result = arrNew.reduce(function (acc, item) {
  return calc(acc, item, action);
});

console.log(arrNew);
console.log(result);

function getAction() {
  let act;
  do {
    act = prompt("Enter action + - * / ");
  } while (isActionValid(act));
  return act;
}

function isActionValid(val) {
  return val !== "+" && val !== "-" && val !== "/" && val !== "*";
}

function getNumbers() {
  let val;
  do {
    val = prompt("Enter your numbers");
  } while (isDataInvalid(val));
  return val;
}

function isDataInvalid(val) {
  return val === null || val.trim() === "";
}

function calc(a, b, action) {
  switch (action) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
