'use strict';

function stringToAlphabeticalOrder(string) {
  string = string.split('');
  return string.sort().toString().replace(/,/g, '');
}
console.log(stringToAlphabeticalOrder('webmaster'));
