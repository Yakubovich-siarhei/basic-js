const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let result = [];
  let items = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  for(let i = 0; i < arr.length; i++){
      if(!items.includes(arr[i])) {
        result.push(arr[i])
      }
      switch(arr[i]) {
        case '--discard-next':
          if((i + 1) < arr.length && !items.includes(arr[i + 1])){
            i = i + 1;
          }
          break;
        case '--discard-prev':
          if(result.length !== 0 && arr[i - 1] == result[result.length - 1] && !items.includes(arr[i - 1])){
            result.pop();
          }
          break;
        case '--double-next':
          if((i + 1) < arr.length && !items.includes(arr[i + 1])){
            result.push(arr[i + 1]);
          }
          break;
        case '--double-prev':
          if((i - 1) >= 0 && !items.includes(arr[i - 1]) && arr[i - 1] === result[result.length - 1]) {
            result.push(arr[i - 1]);
          }
          break;
      }
  }
  return result;
}

module.exports = {
  transform
};
