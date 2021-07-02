import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Form extends Component {
  ticketList = [];

  get data() {
    return {
      status: selected.value,
      title: this.args.title,
      developer: this.args.developer,
      tester: this.args.tester,
      description: this.args.description,
    };
  }

  @action
  submitForm() {
    this.ticketList.push(this.data);
    localStorage.setItem('tickets', JSON.stringify(this.ticketList));
  }
}
