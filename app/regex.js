if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    containsNumber: function (str) {
      var regex = /[0-9]/;
      return regex.test(str);
    },

    containsRepeatingLetter: function (str) {

    },

    endsWithVowel: function (str) {
      var regex = /[a,e,i,o,u]$/i;
      return regex.test(str);
    },

    captureThreeNumbers: function (str) {

    },

    matchesPattern: function (str) {

    },
    isUSD: function (str) {

    }
  };
});