'use strict';

function longestWord(string) {
  let longestStr = 0;
  for (let i = 0; i < string.split(' ').length; i++) {
    if (longestStr < string.split(' ')[i].length) {
      longestStr = string.split(' ')[i].length;
    }
  }
  return longestStr;
}

console.log(longestWord('string one two threeee'));
