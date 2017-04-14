import QUnit from 'steal-qunit';
import plugin from './can-make-map';

QUnit.module('can-make-map');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the can-make-map plugin');
});
