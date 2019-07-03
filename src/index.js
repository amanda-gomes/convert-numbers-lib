const numbers = require('./numbers.js');

function romanToInt(roman) {
  const number = roman.toUpperCase().split('').map(romanToNumber);
  let sum = 0;
  let current = number.length - 1;
  let previous = 0;
  while (current >= 0) {
    parseInt(number[current]) >= previous ?
      sum += parseInt(number[current]) : sum -= parseInt(number[current]);
    previous = parseInt(number[current]);
    current--;
  }
  return sum;
}

function romanToNumber(letter) {
  for (const units in numbers) {
    for (const index in numbers[units]) {
      if (numbers[units][index] === letter) return index;
    }
  }
}

function intToRoman(int) {
  const units = parseInt(int % 10);
  const dozens = parseInt((int % 100) / 10);
  const hundreds = parseInt((int % 1000) / 100);
  const thousands = parseInt((int % 10000) / 1000);
  const number = [thousands * 1000, hundreds * 100, dozens * 10, units];
  return number.map(numberToRoman).join('');
}

function numberToRoman(int) {
  for (const units in numbers) {
    for (const index in numbers[units]) {
      const indexInt = parseInt(index);
      if (indexInt === int) return numbers[units][index];
    }
  }
}

module.exports.romanToInt = romanToInt;
module.exports.intToRoman = intToRoman;