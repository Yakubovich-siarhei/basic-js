const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString().split('');
  let index = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] < str[i + 1]) {
      index = i;
      break;
    }
    if(i == str.length - 1) {
      index = i;
    }
  }
  str = str.join('');
  return +(str.slice(0, index) + str.slice(index + 1));
}

module.exports = {
  deleteDigit
};
