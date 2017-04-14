/*can-make-map@0.0.0#can-make-map*/
function makeMap(str) {
    var obj = {}, items = str.split(',');
    items.forEach(function (name) {
        obj[name] = true;
    });
    return obj;
}
module.exports = makeMap;