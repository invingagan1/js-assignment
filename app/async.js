if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(['jquery'], function ($) {
  return {
    async: function (value) {
      return new Promise((resolve, reject) => {
        resolve(value);
      });
    },

    manipulateRemoteData: function (url) {
      return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
          response.json().then((data) => {
            resolve(data.people.map(p => p.name).sort() );
          }).catch(reject);
        }).catch(reject);
      })
    }
  };
});