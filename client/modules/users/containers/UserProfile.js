import UserProfile from '../components/UserProfile.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, username, clearErrors}, onData) => {

    let u = null;
    let availability = {};
    let name = null;
    let status = null;
    let date = null;
    
    console.log("Username: " + username);
    if(Meteor.subscribe('username.find', username).ready()){
        u = Meteor.users.find({username:username}).fetch()[0];
        if(u === null || u === undefined) {
            onData(null, {});
        } else {
            availability = (u !== null || u !== undefined) && u.roles === 'freelancer';
            name = u.firstName + " " + u.lastName;
            status = u.availability.status;
            date = u.availability.date;
            onData(null, {availability, name, status, date, username});
        }
    } else {
        console.log("Something went wrong UserProfile!");
        onData(null, {});
    }
    
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
