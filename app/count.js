if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    count: function (start, end) {
      let ctr = setInterval(() => {
        console.log(start++);
        if (start > end) {
          clearInterval(ctr);
        }
      }, 1000 / 10);

      return {
        cancel: function () {
          clearInterval(ctr);
        }
      }
    }
  };
});