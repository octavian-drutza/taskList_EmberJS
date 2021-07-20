import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EditController extends Controller {
  @service('date') date;
  @service('dialog') dialog;
  @controller application;

  stats = [
    { option: 'backlog' },
    { option: 'in-development' },
    { option: 'in-testing' },
    { option: 'accepted' },
  ];

  @action
  resetForm() {
    this.title = '';
    this.developer = '';
    this.tester = '';
    this.description = '';
  }

  @action
  submitChanges() {
    this.model.status = selectStatus.value;
    this.model.save();
    this.application.changeRoute('/');
    this.dialog.closeDialog();
    this.resetForm();
  }
}
