import Service from '@ember/service';

export default class TypesService extends Service {
  statusType = ['backlog', 'in-development', 'in-testing', 'accepted'];

  userType = ['developer', 'tester'];
}
