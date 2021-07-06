import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Modal extends Component {
  @service('tickets') tickets;

  @action
  delete() {
    let toDelete = this.tickets.list.filter((ticket) => {
      return this.args.ticket_id == ticket.id;
    });
    this.tickets.remove(toDelete[0]);
  }
}
