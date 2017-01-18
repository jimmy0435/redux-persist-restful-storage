'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AsyncRESTfulStorage = function () {
    function AsyncRESTfulStorage() {
        _classCallCheck(this, AsyncRESTfulStorage);
    }

    _createClass(AsyncRESTfulStorage, [{
        key: 'getItem',
        value: function getItem(key, cb) {
            (0, _isomorphicFetch2.default)('/api/v1/getItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                },
                body: "key=" + key
            }).then(this.checkStatus).then(this.parseJSON).then(function (data) {
                cb(null, data);
            }).catch(function (error) {
                cb(error);
            });
        }
    }, {
        key: 'setItem',
        value: function setItem(key, value, cb) {
            (0, _isomorphicFetch2.default)('/api/v1/setItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                },
                body: "key=" + key + "&value=" + value
            }).then(this.checkStatus).then(this.parseJSON).then(function (data) {
                cb(null);
            }).catch(function (error) {
                cb(error);
            });
        }
    }, {
        key: 'removeItem',
        value: function removeItem(key, cb) {
            (0, _isomorphicFetch2.default)('/api/v1/removeItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                },
                body: "key=" + key + "&value=" + value
            }).then(this.checkStatus).then(this.parseJSON).then(function (data) {
                cb(null);
            }).catch(function (error) {
                cb(error);
            });
        }
    }, {
        key: 'getAllKeys',
        value: function getAllKeys(cb) {
            (0, _isomorphicFetch2.default)('/api/v1/getAllKeys').then(this.checkStatus).then(this.parseJSON).then(function (data) {
                cb(null, data);
            }).catch(function (error) {
                cb(error);
            });
        }
    }, {
        key: 'checkStatus',
        value: function checkStatus(response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }
    }, {
        key: 'parseJSON',
        value: function parseJSON(response) {
            return response.json();
        }
    }]);

    return AsyncRESTfulStorage;
}();

exports.default = AsyncRESTfulStorage;