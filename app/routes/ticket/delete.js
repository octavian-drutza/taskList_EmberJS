import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TicketDeleteRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('ticket', params.id, {
      include: 'developer, tester',
    });
  }
}
