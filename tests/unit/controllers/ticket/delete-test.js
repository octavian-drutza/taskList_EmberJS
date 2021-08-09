import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import Controller from '@ember/controller';
import Route from '@ember/routing/route';

/* Stub app controller */
class Application extends Controller {
  changeRoute() {}
}

module('Unit | Controller | ticket/delete', function (hooks) {
  setupTest(hooks);

  /* Use stub app controller to avoid transition */
  hooks.beforeEach(function (assert) {
    this.owner.register('controller:application', Application);
  });

  test('deletes the ticket', function (assert) {
    let delController = this.owner.lookup('controller:ticket/delete');

    /* create a ticket then delete it */
    let model = run(() =>
      this.owner.lookup('service:store').createRecord('ticket')
    );

    delController.set('model', model);
    run(() => delController.model.save());

    assert.notOk(
      delController.model.get('isNew'),
      'ticket was created for deletion'
    );
    assert.notOk(
      delController.model.get('isSaving'),
      'ticket was persisted before deletion'
    );

    run(() => delController.delete());

    assert.ok(
      delController.model.get('isDeleted'),
      'ticket is deleted locally'
    );
    assert.notOk(
      delController.model.get('isSaving'),
      'ticket deletion was persisted'
    );
    assert.notOk(
      delController.model.get('hasDirtyAttributes'),
      'ticket was destroyed thus deleted'
    );
  });
});
