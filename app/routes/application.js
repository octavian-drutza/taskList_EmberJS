import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TicketRoute extends Route {
  @service('tickets') tickets;

  model() {
    this.tickets.list = JSON.parse(localStorage.getItem('tickets')) || [];
  }
}
