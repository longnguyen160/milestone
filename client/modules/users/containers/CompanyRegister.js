import CompanyRegister from '../components/CompanyRegister.jsx';
import {useDeps,composeWithTracker,composeAll} from 'mantra-core';
export const composer = ({context,clearErrors},onData) => {
  const {LocalState} = context();
  const error = new Array();
  error[0] = LocalState.get("SIGNUP_FIRSTNAME");
  error[1] = LocalState.get("SIGNUP_LASTNAME");
  error[2] = LocalState.get("SIGNUP_COMPANY");
  error[3] = LocalState.get("SIGNUP_EMAIL");
  error[4] = LocalState.get("SIGNUP_PASSWORD");
  error[5] = LocalState.get('SIGNUP_CHECKBOX');
  error[7] = LocalState.get('SIGNUP_CONFIRM');
  if (error[0] === true && error[1] === true && error[2] === true && error[3] === true && error[4] === true && error[5] === true)
    error[6] = true;
 else
    error[6] = false;
  onData(null,{error});
  return clearErrors;
};
export const depsMapper = (context,actions) => ({
  create: actions.users.createUserCompany,
  checkValidation: actions.users.checkValidation,
  clearErrors: actions.users.clearErrors,
  context: () => context
});
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CompanyRegister);
