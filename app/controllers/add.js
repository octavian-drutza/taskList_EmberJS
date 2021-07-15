import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default class AddController extends Controller {
  /*   @service('tickets') tickets; */
  @service('date') date;
  @service('dialog') dialog;
  @service router;
  @service store;
  @controller application;

  @action
  generateID() {
    return Math.floor(Math.random() * 100000);
  }

  /*   @action
  ap(pu) {
    this.get('tickets').addObject(pu);
    this.get('tickets').forEach((ticket) => {
      if (ticket.title) {
        console.log(ticket.title);
      }
 
    });
  } */

  get data() {
    return {
      /*       id: this.generateID(), */
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
  testStore() {
    let ticket = this.store.createRecord('ticket', this.data);
    ticket.save();
  }

  @action
  submitForm() {
    console.log(this.data);
    let ticket = this.store.createRecord('ticket', this.data);
    ticket.save().then(() => {
      this.application.changeRoute('/');
      this.dialog.closeDialog();
      this.resetForm();
    });
  }
}
