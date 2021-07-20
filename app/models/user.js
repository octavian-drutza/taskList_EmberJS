import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @hasMany('ticket') ticket;
  @attr type;
  @attr name;
  @attr email;
  @attr created;
}
