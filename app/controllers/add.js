import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AddController extends Controller {
  @controller application;
  @service('date') date;
  @service('dialog') dialog;
  @service store;

  get data() {
    return {
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
    console.log(this.data);
    let ticket = this.store.createRecord('ticket', this.data);
    ticket.save();
    this.resetForm();
    this.dialog.closeDialog();
    this.application.changeRoute('/');
  }
}
