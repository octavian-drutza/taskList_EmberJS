import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

/* REWRITE THE ASSERT.EQUALS */

module('Unit | Service | authentication', function (hooks) {
  setupTest(hooks);

  test('should add, delete cookies, and authenticate user data', function (assert) {
    let auth = this.owner.lookup('service:authentication');

    let username = 'test';

    auth.cook(username);
    assert.equal(auth.cookie, 'test', 'adds a cookie');

    auth.unCook();
    assert.equal(auth.cookie, undefined, 'deletes the cookie');

    auth.set('loged', { name: 'testLogin' });
    auth.logIn();
    assert.equal(
      auth.cookie,
      'testLogin',
      'logs in by creating a custom cookie useing the loged property of service'
    );

    auth.logOut();
    assert.equal(auth.loged, null, 'logs out and sets loged property to null');
    assert.equal(auth.cookie, undefined, 'logs out and deletes the cookie');

    /* testing authentication function by creating a record and authentifying useing its attributes  */
    run(() =>
      this.owner
        .lookup('service:store')
        .createRecord('user', { name: 'testName', email: 'testEmail' })
    );
    auth.set('logData', { name: 'testName', email: 'testEmail' });
    auth.set('router.transitionTo', () => {});
    run(() => auth.auth());
    assert.equal(
      auth.loged.name,
      'testName',
      'authentifies and sets the loged property to the user created record'
    );
    assert.equal(auth.cookie, 'testName', 'authentifies and creates a cookie');
    auth.set('loged', null);
    run(() => auth.reAuth());
    assert.equal(
      auth.loged.name,
      'testName',
      'relogs useing created cookie after resetting loged property of service'
    );

    auth.set('logData', { name: 'wrongName', email: 'testEmail' });
    run(() => auth.auth());
    assert.equal(auth.alert, true, 'failed authentication with wrong username');
    auth.set('logData', { name: 'testName', email: 'wrongEmail' });
    run(() => auth.auth());
    assert.equal(auth.alert, true, 'failed authentication with wrong email');
  });
});
