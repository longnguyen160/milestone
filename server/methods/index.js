import users from './users';
import invitations from './invitations';
import emails from './emails';
import applications from './applications';

export default function() {
  users();
  emails();
  invitations();
  applications();
}
