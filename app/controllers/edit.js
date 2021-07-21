import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EditController extends Controller {
  @service('date') date;
  @service('dialog') dialog;
  @service('types') types;
  @controller application;
  @service store;

  /*   selected = this.model.status; */

  get users() {
    return this.store.findAll('user');
  }
  /* 
  @action
  changeStatus(status) {
    this.set('selected', status);
  }
 */
  @action
  resetForm() {
    this.title = '';
    this.developer = '';
    this.tester = '';
    this.description = '';
  }

  @action
  submitChanges() {
    console.log(this.model.status);
    this.model.status = selectStatus.value;
    this.model.developer = this.store.peekRecord('user', selectDeveloper.value);
    this.model.tester = this.store.peekRecord('user', selectTester.value);
    this.model.save();
    this.application.changeRoute('/');
    this.dialog.closeDialog();
    this.resetForm();
  }
}
