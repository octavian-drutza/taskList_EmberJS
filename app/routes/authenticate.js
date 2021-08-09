import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AuthenticateRoute extends Route {
  @service('authentication') authentication;
  @service store;

  beforeModel() {
    this.authentication.set('alert', false);
  }

  model() {
    return this.store.findAll('user');
  }
}
