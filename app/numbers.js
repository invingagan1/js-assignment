if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    valueAtBit: function (num, bit) {

    },

    base10: function (str) {
      return str.split('').reverse().reduce(function (pVal, cVal, index) {
        return (cVal === '1') ? pVal + Math.pow(2, index) : pVal;
      }, 0);
    },

    convertToBinary: function (num) {},

    multiply: function (a, b) {
      var precisionLength = 0;
      var b_numArr = b.toString().split('.');
      if (b_numArr.length > 1) {
        precisionLength = b_numArr[1].length;
      }
      return parseFloat((a * b).toFixed(precisionLength));
    }
  };
});