import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import Controller from '@ember/controller';

/* Stub app controller */
class Application extends Controller {
  changeRoute() {}
}

module('Unit | Controller | user/add', function (hooks) {
  setupTest(hooks);

  /* Use stub app controller to avoid transition */
  hooks.beforeEach(function (assert) {
    this.owner.register('controller:application', Application);
  });

  test('adds users to the store', function (assert) {
    let addController = this.owner.lookup('controller:user/add');

    /* register the user if credentials pass */
    let user = run(() =>
      this.owner.lookup('service:store').createRecord('user')
    );
    addController.set('createUser', user);
    run(() => addController.create());

    assert.notOk(
      addController.createUser.get('isNew'),
      'user created and persisted to the store'
    );

    /* create an user then cancel and destroy it */
    let newUser = run(() =>
      this.owner.lookup('service:store').createRecord('user')
    );

    addController.set('createUser', newUser);
    run(() => addController.createUser.save());

    assert.notOk(
      addController.createUser.get('isNew'),
      'user was created for deletion'
    );
    assert.notOk(
      addController.createUser.get('isSaving'),
      'user was persisted before deletion'
    );

    run(() => addController.cancelCreation());

    assert.ok(
      addController.createUser.get('isDeleted'),
      'user is deleted locally'
    );
    assert.notOk(
      addController.createUser.get('isSaving'),
      'user deletion was persisted'
    );
    assert.notOk(
      addController.createUser.get('hasDirtyAttributes'),
      'user was destroyed thus creation canceled'
    );

    /* register an user to make credentials test */
    run(() =>
      this.owner
        .lookup('service:store')
        .createRecord('user', { name: 'testName', email: 'testEmail' })
    );

    /* credentials check */
    addController.set(
      'create',
      () => {}
    ); /* mock the create function to test credentials */

    /* test wrong credentials */
    addController.set('createUser', { name: 'testName' });
    run(() => addController.checkThenCreate());
    assert.ok(
      addController.alert,
      'alert on trying to register with existing username'
    );
    assert.equal(
      addController.message,
      'This username is already in use',
      'messaging that the alert is username'
    );

    addController.set('createUser', { name: 'otherName', email: 'testEmail' });
    run(() => addController.checkThenCreate());
    assert.ok(
      addController.alert,
      'alert on trying to register with existing email'
    );
    assert.equal(
      addController.message,
      'This email is already in use',
      'messaging that the alert is email'
    );

    /* test good credentials */
    addController.set(
      'alert',
      false
    ); /* reset alert to test good credentials */
    addController.set('createUser', { name: 'otherName', email: 'otherEmail' });
    run(() => addController.checkThenCreate());
    assert.notOk(
      addController.alert,
      'alert should not be triggered if log credentials are ok'
    );
  });
});
