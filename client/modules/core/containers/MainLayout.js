import MainLayout from '../components/MainLayout.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
    const {Meteor} = context();
    const {content} = context();
    const {foot} = context();

    let role = null;
    let u = null;
    //console.log(Meteor.userId());
    if(Meteor.userId() !== null || Meteor.userId() !== undefined) {
        onData(null, {role, foot});    
        return clearErrors;
    }
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
    
    clearErrors: actions.home.clearRole,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(MainLayout);
