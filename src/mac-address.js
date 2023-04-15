const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
  const nArr = n.split('-').join('').split('')
  return nArr.every(item => {
    return item === '0' || item === '1' || item === '2' || item === '3' || item === '4'
    || item === '5' || item === '6' || item === '7' || item === '8' || item === '9'
    || item === 'A' || item === 'B' || item === 'C' || item === 'D' || item === 'E' || item === 'F'
  })
}
module.exports = {
  isMAC48Address
};
