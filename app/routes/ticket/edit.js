import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class TicketEditRoute extends Route {
  @service store;

  model(params) {
    return RSVP.hash({
      ticket: this.store.findRecord('ticket', params.id, {
        include: 'developer, tester',
      }),
      users: this.store.findAll('user'),
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set(
      'developers',
      model.users.filter((user) => user.type === 'developer')
    );
    controller.set(
      'testers',
      model.users.filter((user) => user.type === 'tester')
    );
  }
}
