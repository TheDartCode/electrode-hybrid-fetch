'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _require = require('fetch-ponyfill')();
var fetch = _require.fetch;

var fetch$1 = (function (url) {
  var statusCode = void 0;
  return fetch(url).then(function (response) {
    statusCode = response.status;
    return response.json();
  }).then(function (json) {
    return {
      statusCode: statusCode,
      json: json
    };
  });
});

var serverInstance = null;

var setServer = function setServer(server) {
  serverInstance = server;
};

var ssrFetch = (function (url) {
  return serverInstance.inject({
    method: 'GET',
    url: url
  }).then(function (res) {
    var json = JSON.parse(res.payload);
    return {
      statusCode: res.statusCode,
      json: json
    };
  });
});

exports.fetch = fetch$1;
exports.ssrFetch = ssrFetch;
exports.setServer = setServer;
