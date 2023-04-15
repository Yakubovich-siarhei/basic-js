const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainObj = {};
  domains = domains.map((item) => item = item.split('.').reverse().map((item) => '.' + item));
  for(let domain of domains) {
    let resStr = '';
    for(let item of domain) {
      resStr += item;
      if(!(resStr in domainObj)) {
        domainObj[resStr] = 1;
      }else {
        domainObj[resStr]++;
      }
    }
  }

  return domainObj;
}

module.exports = {
  getDNSStats
};
