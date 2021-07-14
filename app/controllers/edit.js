import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EditController extends Controller {
  @service('tickets') tickets;
  @service('date') date;
  @service('dialog') dialog;
  @service router;
  @controller application;

  get data() {
    return {
      id: this.model.id,
      status: selectStatus.value,
      title: this.model.title,
      developer: this.model.developer,
      tester: this.model.tester,
      description: this.model.description,
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
  submitChanges() {
    this.tickets.remove(this.model);
    this.tickets.add(this.data);
    this.application.changeRoute('/');
    this.dialog.closeDialog();
    this.resetForm();
  }
}
