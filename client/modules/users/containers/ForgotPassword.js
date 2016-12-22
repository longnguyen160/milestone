import ForgotPassword from '../components/ForgotPassword.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get("EMAIL_ERROR");
  onData(null, {error});
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
