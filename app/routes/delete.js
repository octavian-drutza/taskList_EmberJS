import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DeleteRoute extends Route {
  @service('tickets') tickets;

  model(params) {
    const { id } = params;
    let ticket = this.tickets.list.find((ticket) => {
      return id == ticket.id;
    });
    return ticket;
  }
}
