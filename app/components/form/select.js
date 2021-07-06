import Component from '@glimmer/component';

export default class FormSelectComponent extends Component {
  values = [
    { option: 'backlog' },
    { option: 'in-development' },
    { option: 'in-testing' },
    { option: 'accepted' },
  ];
}
