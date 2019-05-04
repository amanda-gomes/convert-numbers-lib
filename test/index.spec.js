const chai = require('chai');
const expect = chai.expect;
const convert = require('../src/index')

describe('convert number lib', () => {
  describe('romanToInt', () => {
    it('unidade', () => {
      expect(convert.romanToInt('IV')).to.equal(4);
    });
    it('unidade', () => {
      expect(convert.romanToInt('VIII')).to.equal(8);
    });
    it('dezena', () => {
      expect(convert.romanToInt('XLIX')).to.equal(49);
    });
    it('dezena', () => {
      expect(convert.romanToInt('lxxii')).to.equal(72);
    });
    it('centena', () => {
      expect(convert.romanToInt('CDXCIX')).to.equal(499);
    });
    it('centena', () => {
      expect(convert.romanToInt('DCXL')).to.equal(640);
    });
    it('milhar', () => {
      expect(convert.romanToInt('MMMMMMMMMDLX')).to.equal(9560);
    });
    it('milhar', () => {
      expect(convert.romanToInt('mmxxi')).to.equal(2021);
    });
  });

  describe('intToRoman', () => {
    it('unidade', () => {
      expect(convert.intToRoman(9)).to.equal('IX');
    });
    it('unidade', () => {
      expect(convert.intToRoman(3)).to.equal('III');
    });
    it('dezena', () => {
      expect(convert.intToRoman(94)).to.equal('XCIV');
    });
    it('dezena', () => {
      expect(convert.intToRoman(17)).to.equal('XVII');
    });
    it('centena', () => {
      expect(convert.intToRoman(944)).to.equal('CMXLIV');
    });
    it('centena', () => {
      expect(convert.intToRoman(488)).to.equal('CDLXXXVIII');
    });
    it('milhar', () => {
      expect(convert.intToRoman(4734)).to.equal('MMMMDCCXXXIV');
    });
    it('milhar', () => {
      expect(convert.intToRoman(6192)).to.equal('MMMMMMCXCII');
    });
  });

});