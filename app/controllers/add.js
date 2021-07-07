import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AddController extends Controller {
  @service('tickets') tickets;
  @service('date') date;
  @service('confirmation-dialog') dialog;
  @service router;

  @action
  changeRoute() {
    this.router.transitionTo('/');
  }

  @action
  generateID() {
    return Math.floor(Math.random() * 100000);
  }

  get data() {
    return {
      id: this.generateID(),
      status: selected.value,
      title: this.title,
      developer: this.developer,
      tester: this.tester,
      description: this.description,
      date: this.date.date(),
    };
  }

  @action
  submitForm() {
    this.tickets.add(this.data);
    this.changeRoute();
    this.dialog.closeDialog();
  }
}
