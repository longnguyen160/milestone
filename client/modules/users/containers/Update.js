import Update from '../components/UserProfile.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, username, clearErrors}, onData) => {

    const {Meteor} = context();
    const {content} = context();
    const {foot} = context();

    let role = null;
    let u = null;
    //console.log(Meteor.userId());
    if(Meteor.subscribe('user.single', Meteor.userId()).ready()){
        u = Meteor.user().roles;
    } else {
        console.log("Something went wrong!");
    }
    if(u != null)
        role = u != "admin";
    onData(null, {role, foot});
    return clearErrors;

};

export const depsMapper = (context, actions) => ({
    clearErrors: actions.users.clearErrors,
    
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Update);
