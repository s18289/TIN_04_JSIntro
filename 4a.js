'use strict';

console.log('TEST');

function numberFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.log(numberFactorial(5));

const numberFactorialRecursion = function (number) {
  if (number === 0) {
    return 1;
  }
  return number * numberFactorialRecursion(number - 1);
};

console.log(numberFactorialRecursion(5));
