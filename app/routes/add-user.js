import Route from '@ember/routing/route';

export default class AddUserRoute extends Route {
  setupController(controller) {
    controller.set('createUser', this.store.createRecord('user'));
  }
}
