'use strict';

function fibonacciNumber(number) {
  if (number <= 1) return number;
  return fibonacciNumber(number - 1) + fibonacciNumber(number - 2);
}

console.log(fibonacciNumber(9));
