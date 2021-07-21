import Service from '@ember/service';

export default class TypesService extends Service {
  statusType = [
    { option: 'backlog', label: 'BACKLOG' },
    { option: 'in-development', label: 'IN DEVELOPMENT' },
    { option: 'in-testing', label: 'IN TESTING' },
    { option: 'accepted', label: 'ACCEPTED' },
  ];

  userType = [
    { option: 'developer', label: 'DEVELOPER' },
    { option: 'tester', label: 'TESTER' },
  ];
}
