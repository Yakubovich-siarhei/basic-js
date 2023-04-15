const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr))
      return 0;

    let depthCalc = 0;
    for (let i = 0; i < arr.length; i++) {
      depthCalc = Math.max(depthCalc, this.calculateDepth(arr[i]));
    }
    return 1 + depthCalc;
  }
}

module.exports = {
  DepthCalculator
};
