do {
    num1 = prompt ('Enter first number') 
} while (num1 === null || num1.trim() === '' || isNaN(+num1) == true);

do {
    num2 = prompt ('Enter second number') 
} while (num2 === null || num2.trim() === '' || isNaN(+num1) == true);

num1 = +num1;
num2 = +num2;

let action = prompt ('What we have to do?')
while (action !=='+' && action !=='-' && action !=='*' && action !=='/') {
        action = prompt ('Please, pick +  - *  / ')
    }
switch (action) {
    case '+': add(num1, num2); break;
    case '-': subtraction (num1, num2); break;
    case '*': multiplication(num1, num2); break;
    case '/': division(num1, num2); break;
}

function add (a, b) {
    result = a + b;
    alert (a + ' + ' + b + ' = ' + result);
    return;
   
}
function subtraction (a, b) {
    result = a - b;
    alert (a + ' - ' + b + ' = ' + result)
    return; 
}
function multiplication (a, b) {
    result = a * b;
    alert (a + ' * ' + b + ' = ' + result)
    return; 
}
function division (a, b) {
    result = a / b;
    alert (a + ' / ' + b + ' = ' + result)
    return; 
}
