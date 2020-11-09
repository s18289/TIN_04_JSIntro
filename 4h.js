'use strict';

function secondLowestSecondLargest(array) {
  array.sort(function (x, y) {
    return x - y;
  });
  let number = [array[0]];
  let result = [];

  for (let j = 1; j < array.length; j++) {
    if (array[j - 1] !== array[j]) {
      number.push(array[j]);
    }
  }
  result.push(number[1], number[number.length - 2]);
  return result.join(',');
}

console.log(secondLowestSecondLargest([1, 2, 3, 4, 5]));
