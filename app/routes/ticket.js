import Route from '@ember/routing/route';

export default class TicketRoute extends Route {
  model(params) {
    const { ticket_id } = params;
    return ticket_id;
  }
}
