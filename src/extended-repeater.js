const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arrayRes = [];

  if (str === null) {
    str = 'null'
  }

  if (str === true || str === false) {
    str = String(str);
  }

  if (options.addition === false || options.addition === true || options.addition === null) {
    options.addition = String(options.addition);
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  function makeAddition(addition) {
    let tempAddition = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      tempAddition.push(addition)
    }
    if (!options.additionSeparator) {
      return tempAddition.join('');
    }
    return tempAddition.join(options.additionSeparator)
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    if (options.addition) {
      arrayRes.push(str + makeAddition(options.addition));
    } else {
      arrayRes.push(str);
    }
  }
  return arrayRes.join(options.separator);
}

module.exports = {
  repeater
};