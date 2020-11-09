'use strict';

function isPalindrome(string) {
  let myStr = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
  let counter = 0;
  if (myStr === '') {
    return false;
  }
  if (myStr.length % 2 === 0) {
    counter = myStr.length / 2;
  } else {
    if (myStr.length === 1) {
      return true;
    } else {
      counter = (myStr.length - 1) / 2;
    }
  }
  for (let x = 0; x < counter; x++) {
    if (myStr[x] != myStr.slice(-1 - x)[0]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('Level'));
