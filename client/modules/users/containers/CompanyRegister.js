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
  if (error[0] && error[1] && error[2] && error[3] && error[4] && error[5])
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
