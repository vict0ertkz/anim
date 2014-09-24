    // file: lib/common/plugin/LightValues.js
define("cordova/plugin/LightValues", function(require, exports, module) {

var LightValues = function(x, timestamp) {
    this.x = x;
    this.timestamp = timestamp || (new Date()).getTime();
};

module.exports = LightValues;

});
