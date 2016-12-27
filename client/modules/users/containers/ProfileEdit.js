import ProfileEdit from '../../profile/component/ProfileEdit.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('SAVE_ERROR');
    if (Meteor.subscribe("users.single").ready()) {
        const user = Meteor.user();
        const role = user.roles;
        onData(null, {role, error})
    }
    else onData(null, {error});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    edit: actions.users.eddit,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ProfileEdit);
