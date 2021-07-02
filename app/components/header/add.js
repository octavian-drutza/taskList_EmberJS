import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class HeaderAddComponent extends Component {
  @action
  doSomething() {
    console.log('sdfsdf');
  }
}
