import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import Controller from '@ember/controller';
import Service from '@ember/service';

/* Stub app controller */
class Application extends Controller {
  changeRoute() {}
}
/* Stub dialog service */
class Dialog extends Service {
  closeDialog() {}
}

module('Unit | Controller | ticket/edit', function (hooks) {
  setupTest(hooks);

  /* Use stub app controller to avoid transition */
  hooks.beforeEach(function (assert) {
    this.owner.register('controller:application', Application);
  });
  /* Use stub dialog service to avoid dialog pop up */
  hooks.beforeEach(function (assert) {
    this.owner.register('service:dialog', Dialog);
  });

  test('edits tickets', function (assert) {
    let editController = this.owner.lookup('controller:ticket/edit');

    /* create ticket to test changes implimentation */
    let ticket = run(() =>
      this.owner
        .lookup('service:store')
        .createRecord('ticket', { name: 'name', description: 'description' })
    );

    /* changes  saved */
    editController.set('ticket', ticket);
    editController.ticket.set('name', 'newName');
    editController.ticket.set('description', 'newDescription');
    run(() => editController.saveChanges());
    assert.equal(ticket.name, 'newName', 'changes made and saved');
    assert.equal(
      ticket.description,
      'newDescription',
      'changes made and saved'
    );
  });
});
