import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AddController extends Controller {
  @controller application;
  @service('date') date;
  @service('dialog') dialog;
  @service('types') types;
  @service store;

  selected = this.types.statusType[0];
  developer = '';
  tester = '';

  get developers() {
    return this.model.filter((model) => model.type == 'developer');
  }

  get testers() {
    return this.model.filter((model) => model.type == 'tester');
  }

  @action
  changeStatus(status) {
    this.set('selected', status);
  }

  @action
  changeDeveloper(user) {
    this.set('developer', user);
  }

  @action
  changeTester(user) {
    this.set('tester', user);
  }

  get data() {
    return {
      status: this.selected.option,
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
    this.store.createRecord('ticket', this.data).save();
    this.resetForm();
    this.dialog.closeDialog();
    this.application.changeRoute('/');
  }
}
