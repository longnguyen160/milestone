import CompanyProfile from '../profile/component/CompanyProfile.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('SAVING_ERROR');
    onData(null, {error});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    editCompanyProfile: actions.users.editUser,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(CompanyProfile);
