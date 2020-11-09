'use strict';

function argumentType(argument) {
  return typeof argument;
}

console.log(argumentType(1));
console.log(argumentType('1'));
console.log(argumentType(true));
