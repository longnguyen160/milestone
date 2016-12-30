import Selfcare from '../components/Selfcare';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = new Array();
    error[0] = LocalState.get('CHANGE_PASSWORD');
    error[1] = LocalState.get('SIGNUP_EMAIL');
    error[2] = LocalState.get('CHECK_PASSWORD');
    error[3] = LocalState.get('CHANGE_EMAIL_SUCCESSFULLY');
    error[4] = LocalState.get('CHANGE__PASS_SUCCESSFULLY');
    if (error[1] && error[3])
        error[5] = true;
    else error[5] = false;
    if (error[0] && error[2] && error[4])
        error[6] = true;
    else error[6] = false;
    if (Meteor.subscribe("users.single").ready()) {
        const user = Meteor.user();
        if (user)
            onData(null, {user, error});
        else onData(null, {});
    }
    else onData(null, {error});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    edit: actions.users.edit,
    checkValidation: actions.users.checkValidation,
    checkCoincidence: actions.users.checkCoincidence,
    checkAvailable: actions.users.checkAvailable,
    checkPass: actions.users.checkPass,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Selfcare);