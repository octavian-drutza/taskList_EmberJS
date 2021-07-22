import Route from '@ember/routing/route';

export default class UserAddRoute extends Route {
  setupController(controller) {
    controller.set('createUser', this.store.createRecord('user'));
  }
}
