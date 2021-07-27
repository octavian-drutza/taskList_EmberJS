import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TicketRoute extends Route {
  @service store;
  @service('authentication') authentication;

  beforeModel() {
    this.authentication.reAuth();
  }

  model() {
    return this.store.findAll('ticket');
  }
}
