import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AddController extends Controller {
  @service('tickets') tickets;
  @service('date') date;
  @service('dialog') dialog;
  @service router;
  @controller application;

  @action
  generateID() {
    return Math.floor(Math.random() * 100000);
  }

  get data() {
    return {
      id: this.generateID(),
      status: selectStatus.value,
      title: this.title,
      developer: this.developer,
      tester: this.tester,
      description: this.description,
      date: this.date.date(),
    };
  }

  @action
  resetForm() {
    this.title = '';
    this.developer = '';
    this.tester = '';
    this.description = '';
  }

  @action
  submitForm() {
    this.tickets.add(this.data);
    this.application.changeRoute('/');
    this.dialog.closeDialog();
    this.resetForm();
  }
}
