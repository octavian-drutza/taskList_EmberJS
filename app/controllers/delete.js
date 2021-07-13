import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DeleteController extends Controller {
  @service('tickets') tickets;
  @service('dialog') dialog;
  @service router;

  @action
  delete(id) {
    let toDelete = this.tickets.list.filter((ticket) => {
      return id == ticket.id;
    });
    this.tickets.remove(toDelete[0]);
    this.changeRoute();
  }

  @action
  changeRoute() {
    this.router.transitionTo('/');
  }
}
