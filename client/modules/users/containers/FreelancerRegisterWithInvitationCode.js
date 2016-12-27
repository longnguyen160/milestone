import FreelancerRegisterWithInvitationCode from '../components/FreelancerRegisterWithInvitationCode.jsx';
import {useDeps,composeWithTracker,composeAll} from 'mantra-core';

export const composer = ({context,clearErrors},onData) => {
  const {LocalState} = context();
  const error = new Array();
  error[0] = LocalState.get("SIGNUP_FIRSTNAME");
  error[1] = LocalState.get("SIGNUP_LASTNAME");
  error[2] = LocalState.get("SIGNUP_EMAIL");
  error[3] = LocalState.get("SIGNUP_PASSWORD");
  error[4] = LocalState.get('SIGNUP_CHECKBOX');
  if (error[0] === true && error[1] === true && error[2] === true && error[3] === true && error[4] === true)
    error[5] = true;
 else
    error[5] = false;
  onData(null,{error});
  return clearErrors;
};

export const depsMapper = (context,actions) => ({
  create: actions.users.createUserFreelancer,
  checkValidation: actions.users.checkValidation,
  clearErrors: actions.users.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FreelancerRegisterWithInvitationCode);
