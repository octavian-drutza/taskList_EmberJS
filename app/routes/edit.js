import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EditRoute extends Route {
  @service('tickets') tickets;

  model(params) {
    const { id } = params;
    let ticket = this.tickets.list.filter((ticket) => {
      return id == ticket.id;
    });
    return ticket[0];
  }
}