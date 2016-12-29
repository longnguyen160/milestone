import UserProfile from '../components/UserProfile.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {

    let u = null;
    let availability = {};
    let name = null;

    if(Meteor.subscribe('user.single', Meteor.userId()).ready()){
        u = Meteor.user();
        console.log(u);
        availability = u.availability;
        name = u.firstName + " " + u.lastName;
    } else {
        console.log("Something went wrong UserProfile!");
    }
    
    console.log(availability);

    onData(null, {availability, name});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    clearErrors: actions.users.clearErrors,
    
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(UserProfile);
