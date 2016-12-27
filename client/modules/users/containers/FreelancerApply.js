import FreelancerApply from '../components/FreelancerApply.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = new Array();
    error[0] = LocalState.get("SIGNUP_FIRSTNAME");
    error[1] = LocalState.get("SIGNUP_LASTNAME");
    error[2] = LocalState.get("SIGNUP_EMAIL");
    error[3] = LocalState.get('SIGNUP_CHECKBOX');
    console.log(error);
    error[4] = false;
    if (error[0] && error[1] && error[2] && error[3]) {
      error[4] = true;
    } else error[4] = false;
    onData(null, {error});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    checkValidation: actions.users.checkValidation,
    create: actions.users.createApplication,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(FreelancerApply);
