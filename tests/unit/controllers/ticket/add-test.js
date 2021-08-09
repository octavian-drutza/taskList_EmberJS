import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import Controller from '@ember/controller';

/* Stub app controller */
class Application extends Controller {
  changeRoute() {}
}

module('Unit | Controller | ticket/add', function (hooks) {
  setupTest(hooks);

  /* Use stub app controller to avoid transition */
  hooks.beforeEach(function (assert) {
    this.owner.register('controller:application', Application);
  });

  test('adds tickets to the store', function (assert) {
    let addController = this.owner.lookup('controller:ticket/add');

    /* create a ticket then save it */
    let ticket = run(() =>
      this.owner.lookup('service:store').createRecord('ticket')
    );

    addController.set('createTicket', ticket);

    run(() => addController.create());

    assert.notOk(
      addController.createTicket.get('isNew'),
      'ticket created and persisted to the store'
    );

    /* create a ticket then cancel and destroy it */
    let newTicket = run(() =>
      this.owner.lookup('service:store').createRecord('ticket')
    );

    addController.set('createTicket', newTicket);
    run(() => addController.createTicket.save());

    assert.notOk(
      addController.createTicket.get('isNew'),
      'ticket was created for deletion'
    );
    assert.notOk(
      addController.createTicket.get('isSaving'),
      'ticket was persisted before deletion'
    );

    run(() => addController.cancelCreation());

    assert.ok(
      addController.createTicket.get('isDeleted'),
      'ticket is deleted locally'
    );
    assert.notOk(
      addController.createTicket.get('isSaving'),
      'ticket deletion was persisted'
    );
    assert.notOk(
      addController.createTicket.get('hasDirtyAttributes'),
      'ticket was destroyed thus creation canceled'
    );
  });
});
