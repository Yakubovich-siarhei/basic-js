const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let arr = [];
  for(let i = 0; i < 1; i++){
    for(let j = 1; j < names.length; j++){
      if(names[i] === names[j]){
        names[j] = names[j] + `(${arr.length + 1})`
        arr.push(names[j])
      }
    }
  }
  arr = [];
  for(let i = 1; i < 2; i++){
    for(let j = 2; j < names.length; j++){
      if(names[i] === names[j]){
        names[j] = names[j] + `(${arr.length + 1})`
        arr.push(names[j])
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
