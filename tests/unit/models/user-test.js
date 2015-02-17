import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('user', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('should return a list of users', function(assert) {
  var model = this.subject({
    firstName: 'Ursula',
    lastName: 'Yethon'
  });
  assert.strictEqual(model.get('fullName'),'Ursula Yethon');
});
