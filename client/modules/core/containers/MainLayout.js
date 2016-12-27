import MainLayout from '../components/MainLayout.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
    const {Meteor} = context();
	// let id = Meteor.user();
    // if(id === undefined) {
    //     return clearErrors;
    // }
    let role = null;
    let u = null;
    
    if(Meteor.subscribe('users.single', Meteor.userId()).ready()){
        u = Meteor.user().roles;
    } else {
        console.log("Something went wrong!");
    }
    if(u != null)
        role = u != "admin";
    onData(null, {role});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    
    clearErrors: actions.home.clearRole,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(MainLayout);
