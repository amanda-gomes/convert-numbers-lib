const expect = require('chai').expect;
const convert = require('../src/index')

describe('convert numbers lib', () => {
  describe('romanToInt', () => {
    it('unidade com subtração', () => {
      expect(convert.romanToInt('IV')).to.equal(4);
    });
    it('unidade', () => {
      expect(convert.romanToInt('VIII')).to.equal(8);
    });
    it('dezena com subtração', () => {
      expect(convert.romanToInt('XLIX')).to.equal(49);
    });
    it('dezena', () => {
      expect(convert.romanToInt('lxxii')).to.equal(72);
    });
    it('centena com subtração', () => {
      expect(convert.romanToInt('CDXCIX')).to.equal(499);
    });
    it('centena', () => {
      expect(convert.romanToInt('DCX')).to.equal(610);
    });
    it('milhar com subtração', () => {
      expect(convert.romanToInt('mmcdxxi')).to.equal(2421);
    });
    it('milhar', () => {
      expect(convert.romanToInt('MMMMMMMMMDLX')).to.equal(9560);
    });  
  });

  describe('intToRoman', () => {
    it('unidade com subtração', () => {
      expect(convert.intToRoman(9)).to.equal('IX');
    });
    it('unidade', () => {
      expect(convert.intToRoman(3)).to.equal('III');
    });
    it('dezena com subtração', () => {
      expect(convert.intToRoman(94)).to.equal('XCIV');
    });
    it('dezena', () => {
      expect(convert.intToRoman(17)).to.equal('XVII');
    });
    it('centena com substração', () => {
      expect(convert.intToRoman(944)).to.equal('CMXLIV');
    });
    it('centena', () => {
      expect(convert.intToRoman(588)).to.equal('DLXXXVIII');
    });
    it('milhar com substração', () => {
      expect(convert.intToRoman(4934)).to.equal('MMMMCMXXXIV');
    });
    it('milhar', () => {
      expect(convert.intToRoman(6122)).to.equal('MMMMMMCXXII');
    });
  });

});