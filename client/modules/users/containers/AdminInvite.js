import AdminInvite from '../components/AdminInvite.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  checkInvitationCode : actions.users.checkInvitationCode,
  clearErrors : actions.users.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AdminInvite)
