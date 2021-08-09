import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | types', function (hooks) {
  setupTest(hooks);

  test('should return arrays of data', function (assert) {
    let types = this.owner.lookup('service:types');

    assert.equal(
      types.statusType.every((el) => typeof el === 'string'),
      true,
      'all array elements are strings'
    );

    assert.equal(
      types.userType.every((el) => typeof el === 'string'),
      true,
      'all array elements are strings'
    );
  });
});
