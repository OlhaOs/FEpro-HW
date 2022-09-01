const number = getNumber("Enter number");
countNumbers(number);

function getNumber(label) {
  let number;
  do {
    number = prompt(label);
  } while (isNumberInvalid(number));
  return +number;
}
function isNumberInvalid(number) {
  return number === null || isNaN(number) || number.trim === "" || number <= 0;
}

function countNumbers(number) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      sumEven = sumEven + i;
      continue;
    } else {
      sumOdd = sumOdd + i;
      continue;
    }
  }
  showResult(sumEven, sumOdd);
}

function showResult(even, odd) {
  alert(`Sum of even numbers: ${even}`);
  alert(`Sum of odd numbers: ${odd}`);
}
