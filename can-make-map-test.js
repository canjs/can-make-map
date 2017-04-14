var makeMap = require('./can-make-map');
var QUnit = require('steal-qunit');

QUnit.module("can-make-map");

QUnit.test("basics", function(){
	var res = makeMap("a,b,c");
	QUnit.deepEqual(res, { a: true, b: true, c: true });
	QUnit.ok(res instanceof Object);
});
