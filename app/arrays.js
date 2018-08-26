if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    indexOf: function (arr, item) {
      if (Array.isArray(arr)) {
        var pos = -1;
        if (arr.length > 0) {
          arr.forEach(function (element, index) {
            if (item === element) {
              pos = index;
            }
          });
          return pos;
        } else {
          return pos;
        }
      } else {
        throw arr + ' is not an array';
      }
    },

    sum: function (arr) {
      if (Array.isArray(arr)) {
        return arr.reduce((pVal, cVal) => {
          return pVal + cVal;
        });
      } else {
        throw arr + ' is not an array';
      }
    },

    remove: function (arr, item) {
      if (Array.isArray(arr)) {
        return arr.filter(ele => item !== ele);
      } else {
        throw arr + ' is not an array';
      }
    },

    removeWithoutCopy: function (arr, item) {
      if (Array.isArray(arr)) {
        for (var index = 0; index < arr.length; index++) {
          if (item === arr[index]) {
            arr.splice(index, 1);
            index--;
          }
        }
        return arr;
      } else {
        throw arr + ' is not an array ';
      }
    },

    append: function (arr, item) {
      if (Array.isArray(arr)) {
        arr.push(item);
        return arr;
      } else {
        throw arr + ' is not an array';
      }
    },

    truncate: function (arr) {
      if (Array.isArray(arr)) {
        arr.splice(arr.length - 1, 1);
        return arr;
      } else {
        throw arr + ' is not an array';
      }
    },

    prepend: function (arr, item) {
      if (Array.isArray(arr)) {
        arr.splice(0, 0, item);
        return arr;
      } else {
        throw arr + ' is not an array';
      }
    },

    curtail: function (arr) {
      if (Array.isArray(arr)) {
        arr.splice(0, 1);
        return arr;
      } else {
        throw arr + ' is not an array';
      }
    },

    concat: function (arr1, arr2) {
      if (Array.isArray(arr1) && Array.isArray(arr2)) {
        return arr1.concat(arr2);
      } else {
        if (!Array.isArray(arr1)) {
          throw arr1 + ' is not an array';
        }
        if (!Array.isArray(arr2)) {
          throw arr2 + ' is not an array';
        }
      }
    },

    insert: function (arr, item, index) {
      if (Array.isArray(arr)) {
        if (index < 0) {
          throw 'invalid index to insert value';
        } else {
          arr.splice(index, 0, item);
          return arr;
        }
      } else {
        throw arr + ' is not an array';
      }
    },

    count: function (arr, item) {
      if (Array.isArray(arr)) {
        var count = 0;
        arr.forEach(ele => {
          if (item === ele) {
            count++;
          }
        });
        return count;
      } else {
        throw arr + ' is not an array';
      }
    },

    duplicates: function (arr) {
      if (Array.isArray(arr)) {
        var duplicates = [];
        arr.forEach((ele, index) => {
          if (arr.indexOf(ele, index + 1) >= 0) {
            if (duplicates.indexOf(ele) === -1) {
              duplicates.push(ele);
            }
          }
        });
        return duplicates;
      } else {
        throw arr + ' is not an array';
      }
    },

    square: function (arr) {
      if (Array.isArray(arr)) {
        return arr.map(ele => ele * ele);
      } else {
        throw arr + ' is not an arrya';
      }
    },

    findAllOccurrences: function (arr, target) {
      return arr.reduce((pVal, cVal, index) => {
        if (target === cVal) {
          pVal.push(index);
        }
        return pVal;
      }, []);
    }
  };
});