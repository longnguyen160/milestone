import users from './users';
import invitations from './invitations';
import emails from './emails';
import home from './home';

export default function() {
  users();
  emails();
  invitations();
  home();
}
