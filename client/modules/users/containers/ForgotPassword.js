import ForgotPassword from '../components/ForgotPassword.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {Accounts} from 'meteor/accounts-base';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get("EMAIL_ERROR");
  const success = LocalState.get("SUCCESS");
  onData(null, {error, success});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  sendPassword: actions.users.sendPassword,
  clearErrors: actions.users.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ForgotPassword)
