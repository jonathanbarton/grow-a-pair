import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:taco', {
  // Specify the other units that are required for this test.
  needs: ['controller:taco'],
  setup: function() {},
  teardown: function() {}
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});
