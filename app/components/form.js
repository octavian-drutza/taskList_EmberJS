import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Form extends Component {
  ticketList = [];
  data = {};

  @action
  submitForm() {
    this.data.status = selected.value;
    this.ticketList.push(this.data);
    localStorage.setItem('tickets', JSON.stringify(this.ticketList));
  }
}
