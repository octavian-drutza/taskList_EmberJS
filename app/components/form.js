import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Form extends Component {
  @service('tickets') tickets;

  @action
  generateID() {
    return Math.floor(Math.random() * 100000);
  }

  get data() {
    return {
      id: this.generateID(),
      status: selected.value,
      title: this.args.title,
      developer: this.args.developer,
      tester: this.args.tester,
      description: this.args.description,
    };
  }

  @action
  submitForm() {
    this.tickets.add(this.data);
    this.tickets.toLocalStorage();
    this.args.changeRoute();
  }
}
