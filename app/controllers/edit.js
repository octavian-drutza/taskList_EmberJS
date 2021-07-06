import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EditController extends Controller {
  @service('tickets') tickets;
  @service router;
  @service('date') date;

  get data() {
    return {
      id: this.model.id,
      status: selected.value,
      title: this.title,
      developer: this.developer,
      tester: this.tester,
      description: this.description,
      date: this.date.date(),
    };
  }

  @action
  changeRoute() {
    this.router.transitionTo('/');
  }

  /*   @action
  ticketIndex() {
    return this.tickets.list.findIndex((ticket) => ticket.id == this.model.id);
  }
 */

  @action
  findTicket(id) {
    let ticket = this.tickets.list.filter((ticket) => {
      return id == ticket.id;
    });
    return ticket[0];
  }

  @action
  submitChanges() {
    this.tickets.remove(this.findTicket(this.model.id));
    this.tickets.add(this.data);
    this.changeRoute();
  }
}
