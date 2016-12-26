import FreelancerRegister from '../components/FreelancerRegister.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get("INVITECODE_ERROR");
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  sendCode : actions.users.sendCode,
  clearErrors : actions.users.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FreelancerRegister)
