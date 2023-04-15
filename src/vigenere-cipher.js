const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(state = true) {
    this.state = state;
  }

  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabetArray = this.alphabet.split('');

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    console.log(key)

    let idMess = [];
    let idKey = [];
    let span = [];
    let resIndex;
    let res;
    message = message.toLowerCase();
    key = key.toLowerCase();

    const messageArray = message.split('');
    messageArray.forEach((element, index) => {
      if(this.alphabetArray.indexOf(element) === -1) {
        span.push([element,index])
      }

      return idMess.push(this.alphabetArray.indexOf(element))
    });
    idMess = idMess.filter(element => element !== -1)

    let newKey = key.repeat(idMess.length).slice(0, idMess.length);
    const keyArray = newKey.split('');
    keyArray.forEach(element => idKey.push(this.alphabetArray.indexOf(element))); 

    resIndex = idMess.map( (element, index) => element === - 1 ? ' ' : element + idKey[index]);
    res = resIndex.map(element => element === ' ' ? ' ' : this.alphabetArray[element] ? this.alphabetArray[element] : this.alphabetArray[element - this.alphabetArray.length]);
    span.forEach(element => {
      res.splice(element[1], 0, element[0])
    })
    res = res.join('').toUpperCase();

    return res;
  }
  decrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    let idMess = [];
    let idKey = [];
    let span = [];
    let resIndex;
    let res;
    message = message.toLowerCase();
    key = key.toLowerCase();

    const messageArray = message.split('');
    messageArray.forEach((element, index) => {
      if(this.alphabetArray.indexOf(element) === -1) {
        span.push([element,index])
      }

      return idMess.push(this.alphabetArray.indexOf(element))
    });
    idMess = idMess.filter(element => element !== -1)

    let newKey = key.repeat(idMess.length).slice(0, idMess.length);
    const keyArray = newKey.split('');
    keyArray.forEach(element => idKey.push(this.alphabetArray.indexOf(element))); 
    const reverseIdKey = idKey.map(el => String(el)).reverse().map(el => +el)

    if(this.state) {
      resIndex = idMess.map( (element, index) => element === - 1 ? ' ' : element > idKey[index] ? element - idKey[index] : element - idKey[index] + this.alphabetArray.length)
    } else {
      resIndex = idMess.map( (element, index) => element === - 1 ? ' ' : element > reverseIdKey[index] ? element - reverseIdKey[index] : element - reverseIdKey[index] + this.alphabetArray.length)
    }

    res = resIndex.map(element => element === ' ' ? ' ' : this.alphabetArray[element] ? this.alphabetArray[element] : this.alphabetArray[element - this.alphabetArray.length]);
    span.forEach(element => {
      res.splice(element[1], 0, element[0])
    })
    res = res.join('').toUpperCase();

    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
