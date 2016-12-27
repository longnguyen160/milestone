import CompanyProfile from '../components/CompanyProfile.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, userId, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('SAVING_ERROR');
    if (userId !== undefined) {
        const user = users.findOne(userId);
        if (user)
            onData(null, {user});
        else onData();
    }
    else onData(null, {error});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    editUser: actions.users.editUser,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(CompanyProfile);
