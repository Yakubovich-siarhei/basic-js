const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (typeof sampleActivity !=="string" || !parseInt(sampleActivity)) {
    return false;
  }

  if(sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY){
    return false
  }


  let HALF_LIFE = 0.693;
  let a = HALF_LIFE / HALF_LIFE_PERIOD;
  let b = Math.log(MODERN_ACTIVITY / +sampleActivity);
  let c = b / a;

  return Math.ceil(c)

}

module.exports = {
  dateSample
};
