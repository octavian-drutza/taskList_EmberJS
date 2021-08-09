import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserAddRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('user');
  }

  setupController(controller) {
    controller.set('createUser', this.store.createRecord('user'));
    controller.set('alert', false);
  }
}
