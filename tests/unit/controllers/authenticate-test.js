import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';

/* Stub authentication service */
class Authentication extends Service {
  auth() {
    return true;
  }
}

module('Unit | Controller | authenticate', function (hooks) {
  setupTest(hooks);

  /* Use stub authentication service to check method is called */
  hooks.beforeEach(function (assert) {
    this.owner.register('service:authentication', Authentication);
  });

  test('calls for auth method in the authenticate service', function (assert) {
    let authController = this.owner.lookup('controller:authenticate');

    /* for assertion a stub service will be use and ensure that the method is called */
    let response = authController.auth();
    assert.equal(response, true, 'authentication service called successfully');
  });
});
