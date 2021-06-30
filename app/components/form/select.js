import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Form extends Component {
  selectedOption = null;

  @action
  select() {
    this.selectedOption = selected.value;
  }
}
