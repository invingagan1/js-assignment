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

      function swap(elements, index1, index2) {
        var temp = elements[index1];
        elements[index1] = elements[index2];
        elements[index2] = temp;
        return elements;
      }

      function doPermute(arr, startIndex, endIndex) {

        if (startIndex === endIndex) {
          result.push(arr.slice());
        } else {
          for (var index = startIndex; index <= endIndex; index++) {
            swap(arr, startIndex, index);
            doPermute(arr, startIndex + 1, endIndex);
            swap(arr, index, startIndex);
          }
        }
      }
      doPermute(arr, 0, arr.length - 1);
      return result;
    }
  };
});