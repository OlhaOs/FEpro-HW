const action = getAction();
const amount = getNumber("Enter amount of numbers");

let result = 0;
let number;
let expression = "";

for (let i = 1; i <= amount; i++) {
  number = getNumber(`Enter ${i} number`);
  if (i == 1) {
    result = number;
    expression = `${number}`;
  } else {
    result = calc(result, number, action);
    expression = `${expression} ${action} ${number}`;
  }
}

showResult(expression, result);

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

function getNumber(label) {
  let val;
  do {
    val = prompt(label);
  } while (isNumberInvalid(val));
  return +val;
}

function isNumberInvalid(val) {
  return val === null || val.trim() === "" || isNaN(val);
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
function showResult(str, res) {
  alert(`${str} = ${res}`);
}
