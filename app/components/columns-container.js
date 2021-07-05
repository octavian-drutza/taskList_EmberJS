import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ColumnsContainerComponent extends Component {
  @service('tickets') tickets;
  columnTypes = [
    { status: 'backlog' },
    { status: 'in-development' },
    { status: 'in-testing' },
    { status: 'accepted' },
  ];
}
