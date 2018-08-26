if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    argsAsArray: function (fn, arr) {
      return fn.apply(null, arr);
    },

    speak: function (fn, obj) {
      return fn.call(obj);
    },

    functionFunction: function (str) {
      return function (str1) {
        return str + ', ' + str1;
      };
    },

    makeClosures: function (arr, fn) {
      return arr.map(function (ele) {
        return function () {
          return fn(ele);
        };
      });
    },

    partial: function (fn, str1, str2) {
      return function (str3) {
        return fn(str1, str2, str3);
      };
    },

    useArguments: function () {
      var sum = 0;
      for (var index = 0; index < arguments.length; index++) {
        sum += arguments[index];
      }
      return sum;
    },

    callIt: function (fn) {
      var argsArr = [];
      if (arguments.length > 1) {
        for (var index = 1; index < arguments.length; index++) {
          argsArr.push(arguments[index]);
        }
      }
      return fn.apply(null, argsArr);
    },

    partialUsingArguments: function (fn) {
      var argsArr = [];
      if (arguments.length > 1) {
        for (var index = 1; index < arguments.length; index++) {
          argsArr.push(arguments[index]);
        }
      }
      return function () {
        var concatArgs = argsArr.concat(arguments);
        return fn.apply(null, concatArgs);
      };
    },

    curryIt: function (fn) {
      return function () {

      };
    }
  };
});