/*can-make-map@1.0.0#can-make-map*/
define(function (require, exports, module) {
    function makeMap(str) {
        var obj = {}, items = str.split(',');
        items.forEach(function (name) {
            obj[name] = true;
        });
        return obj;
    }
    module.exports = makeMap;
});