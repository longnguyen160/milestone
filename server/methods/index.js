import users from './users';
import invitations from './invitations';
import emails from './emails';
import home from './home';
import applications from './applications';

export default function() {
  users();
  emails();
  invitations();
  home();
  applications();
}
