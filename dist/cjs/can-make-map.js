/*can-make-map@1.0.1#can-make-map*/
'use strict';
function makeMap(str) {
    var obj = {}, items = str.split(',');
    items.forEach(function (name) {
        obj[name] = true;
    });
    return obj;
}
module.exports = makeMap;