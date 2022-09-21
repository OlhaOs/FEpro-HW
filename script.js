const action = document.querySelector("#pickAction");
const number1 = document.querySelector("#firstValue");
const number2 = document.querySelector("#secondValue");
const result = document.querySelector("#outputResult");
const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", onBtnClick);

function onBtnClick() {
  result.textContent = `${number1.value} ${action.value} 
  ${number2.value} = ${calc(+number1.value, +number2.value, action.value)}`;
}
function calc(a, b, act) {
  switch (act) {
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
