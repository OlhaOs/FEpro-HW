const num1 = getNumber('Enter 1 number');
const num2 = getNumber('Enter 2 number');
const action = getAction();
const result = calc(num1, num2, action);
showResult(num1, num2, action, result);

function getNumber (label) {
    let number;
    do  {number = prompt (label)}
        while (isNumberValid(number));
    return +number;
}
function isNumberValid (number) {
    return number === null || number.trim() === '' || isNaN(number);
}
function getAction() {
    let value;
    do {value = prompt ('Please, pick action +  - *  / ')} 
        while (isActionInvalid (value));
        return value;
  }

function isActionInvalid(action) {
    return action !=='+' && action !=='-' && action !=='*' && action !=='/';
};

function calc(a,b, action) {
        switch(action) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    }
}

function showResult(a,b, action, result){
    alert (`${a} ${action} ${b} = ${result}`)
}