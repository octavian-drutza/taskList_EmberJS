import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service('tickets') tickets;

  columnTypes = [
    { status: 'backlog' },
    { status: 'in-development' },
    { status: 'in-testing' },
    { status: 'accepted' },
  ];

  @action
  delete(id) {
    let toDelete = this.tickets.list.filter((ticket) => {
      return id == ticket.id;
    });
    this.tickets.remove(toDelete[0]);
  }
}
