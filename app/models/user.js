import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @hasMany('ticket', { inverse: 'tester' }) tickets;
  @attr type;
  @attr name;
  @attr email;
  @attr created;
}
