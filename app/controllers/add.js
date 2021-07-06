import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AddController extends Controller {
  @service('tickets') tickets;
  @service router;

  @action
  changeRoute() {
    this.router.transitionTo('/');
  }

  @action
  generateID() {
    return Math.floor(Math.random() * 100000);
  }

  get date() {
    let date = new Date();
    let settings = {
      day: 'numeric',
      month: '2-digit',
      year: 'numeric',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return date.toLocaleString([], settings);
  }

  get data() {
    return {
      id: this.generateID(),
      status: selected.value,
      title: this.title,
      developer: this.developer,
      tester: this.tester,
      description: this.description,
      date: this.date,
    };
  }

  @action
  submitForm() {
    this.tickets.add(this.data);
    this.changeRoute();
  }
}
