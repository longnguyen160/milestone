import FreelancerProfile from '../../profile/component/FreelancerProfile.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('SAVING_ERROR');
    if (Meteor.subscribe("users.single").ready()) {
        const userId = Meteor.userId();
        onData(null, {userId, error})
    }
    else onData(null, {error});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    editFreelancerProfile: actions.users.editFreelancerProfile,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(FreelancerProfile);
