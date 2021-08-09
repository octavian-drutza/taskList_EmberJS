import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | dialog', function (hooks) {
  setupTest(hooks);

  test('should turn on and off the confirmation dialog', function (assert) {
    let dialog = this.owner.lookup('service:dialog');

    dialog.openDialog();
    assert.equal(dialog.state, true, 'sets state to true, dialog hides');

    dialog.closeDialog();
    assert.equal(dialog.state, false, 'sets state to false, dialog appears');
  });
});
