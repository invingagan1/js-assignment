if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    listFiles: function (data, dirName) {

      function getList(obj, addToList) {
        if (obj.files && obj.files.length) {
          return obj.files.reduce(function (pVal, cVal) {
            if (typeof cVal === 'string') {
              var canAddToList = false;
              if (undefined === dirName && undefined === addToList) {
                canAddToList = true;
              }
              if (!canAddToList && dirName === obj.dir) {
                canAddToList = true;
                addToList = true;
              }
              if (!canAddToList && addToList) {
                canAddToList = true;
              }

              if (canAddToList) {
                pVal.push(cVal);
              }
            }
            if (typeof cVal === 'object') {
              pVal = pVal.concat(getList(cVal, addToList));
            }
            return pVal;
          }, []);
        }
      }

      return getList(data);
    },

    permute: function (arr) {
      var result = [];

    }
  };
});