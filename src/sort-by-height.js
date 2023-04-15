const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let itemArr = arr.filter((item) => item !== -1);
  itemArr.sort((a, b) => a - b);
  arr.forEach((item, index) => {
    if(item == -1) {
      itemArr.splice(index, 0, -1);
    }
  })
  return itemArr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
