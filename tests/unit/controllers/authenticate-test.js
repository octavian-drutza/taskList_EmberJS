import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';

/* Stub authentication service */
class Authentication extends Service {
  result = false;

  auth() {
    console.log('i was called from inside the test');
    this.result = true;
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
    let stubService = this.owner.lookup('service:authentication');

    /* for assertion a stub service will be use and ensure that the method is called */
    authController.auth();
    let result = stubService.result;
    assert.equal(result, true, 'authentication service called successfully');
  });
});
