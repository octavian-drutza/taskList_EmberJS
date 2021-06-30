import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Form extends Component {
  ticketList = [];

  @action
  submitForm() {
    this.data = {};
    this.data.status = selected.value;
    this.data.title = title.value;
    this.data.developer = developer.value;
    this.data.tester = tester.value;
    this.data.description = description.value;
    this.ticketList.push(this.data);
    localStorage.setItem('tickets', JSON.stringify(this.ticketList));
    console.log(this.ticketList);
  }
}
