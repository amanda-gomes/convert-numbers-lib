const unit = {
  0: '',
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX'
};

const dozen = {
  0: '',
  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC'
};

const hundred = {
  0: '',
  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM'
};

const thousand = {
  0: '',
  1: 'M',
  2: 'MM',
  3: 'MMM',
  4: 'MMMM',
  5: 'MMMMM',
  6: 'MMMMMM',
  7: 'MMMMMMM',
  8: 'MMMMMMMM',
  9: 'MMMMMMMMM'
};

function romanToInt(roman) {
  let romanUpperCase = roman.toUpperCase();
  let letters = [];
  for (let letter of romanUpperCase) {
    for (let key in unit) {
      if (thousand[key] === letter) {
        letters.push(key + 0 + 0 + 0);
      } else if (hundred[key] === letter) {
        letters.push(key + 0 + 0);
      } else if (dozen[key] === letter) {
        letters.push(key + 0);
      } else if (unit[key] === letter) {
        letters.push(key);
      }
    }
  }
  let sum = 0;
  let previous = 0;
  let current = 0;
  let numberOfLetters = letters.length - 1;
  while (numberOfLetters >= 0) {
    current = parseInt(letters[numberOfLetters]);
    if (current > previous || current === previous) {
      sum = sum + current;
      previous = current;
    } else {
      sum = sum - current;
      previous = current;
    }
    numberOfLetters--;
  }
  return sum;
}

function intToRoman(number) {
  let units = parseInt((number % 100) % 10);
  let dozens = parseInt((number % 100) / 10);
  let hundreds = parseInt((number % 1000) / 100);
  let thousands = parseInt((number % 10000) / 1000);

  return thousand[thousands] + hundred[hundreds] + dozen[dozens] + unit[units];
}

module.exports.romanToInt = romanToInt;
module.exports.intToRoman = intToRoman;