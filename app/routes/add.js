import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AddRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('user');
  }

  setupController(controller, model) {
    controller.set(
      'developers',
      model.filter((user) => user.type === 'developer')
    );
    controller.set(
      'testers',
      model.filter((user) => user.type === 'tester')
    );
    controller.set('createTicket', this.store.createRecord('ticket'));
  }
}
