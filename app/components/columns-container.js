import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class ColumnsContainerComponent extends Component {
  @tracked ticketList = [];
}
