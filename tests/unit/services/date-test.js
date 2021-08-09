import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | date', function (hooks) {
  setupTest(hooks);

  test('should return a date', function (assert) {
    let date = this.owner.lookup('service:date');

    let genDate = date.date();

    assert.equal(
      typeof genDate === 'string',
      true,
      'confirms the date is a string'
    );
  });
});
