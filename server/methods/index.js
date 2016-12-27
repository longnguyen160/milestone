import users from './users';
import invitations from './invitations';
import emails from './emails';

export default function() {
  users();
  emails();
  invitations();
}
