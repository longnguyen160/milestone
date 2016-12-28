import CompanyProfile from '../../profile/component/CompanyProfile.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {Image} from '/lib/collections';

export const composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('SAVING_ERROR');
    if (Meteor.subscribe("users.single").ready()) {
        const user = Meteor.user();
        if (Meteor.subscribe("img.single").ready()) {
            const img = Image.find({userId: user._id}).fetch();
            onData(null, {user, img, error});
        }
        else onData(null, {user, error});
    }
    else onData(null, {error});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    editCompanyProfile: actions.users.editCompanyProfile,
    deleteIMG: actions.users.deleteIMG,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(CompanyProfile);
