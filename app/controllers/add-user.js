import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
/* import { tracked } from '@glimmer/tracking'; */

export default class AddController extends Controller {
  @controller application;
  @service('date') date;
  @service('dialog') dialog;
  @service store;

  types = [{ option: 'developer' }, { option: 'tester' }];

  get data() {
    return {
      type: selectType.value,
      name: this.name,
      email: this.email,
      created: this.date.date(),
    };
  }

  @action
  resetForm() {
    this.name = '';
    this.email = '';
  }

  @action
  submitForm() {
    console.log(this.data);
    let user = this.store.createRecord('user', this.data);
    user.save();
    this.resetForm();
    this.dialog.closeDialog();
    this.application.changeRoute('/');
  }
}