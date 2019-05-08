const numbers = {
  'unit': {
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
  },
  'dozen': {
    0: '',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC'
  },
  'hundred': {
    0: '',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM'
  },
  'thousand': {
    0: '',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
    4000: 'MMMM',
    5000: 'MMMMM',
    6000: 'MMMMMM',
    7000: 'MMMMMMM',
    8000: 'MMMMMMMM',
    9000: 'MMMMMMMMM'
  }
};

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