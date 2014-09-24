    // file: lib/common/plugin/LightValues.js
define("cordova/plugin/LightValues", function(require, exports, module) {

var Acceleration = function(lux, timestamp) {
    this.lux = lux;
    this.timestamp = timestamp || (new Date()).getTime();
};

module.exports = LightValues;

});
