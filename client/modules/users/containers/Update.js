import Update from '../components/UserProfile.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, token, clearErrors}, onData) => {

    const {Meteor, FlowRouter} = context();
    const {content} = context();
    let u = null;
    let status = null;
    let error = null;
    //console.log(Meteor.userId());
    if(Meteor.userId() !== null || Meteor.userId() !== undefined) {
        Bert.alert('<b>Please login first!<b/>', 'danger');
        FlowRouter.go("account.login");
        return;
    }
    // console.log("I'm here");
    if(Meteor.subscribe('user.single', Meteor.userId()).ready()){
        u = Meteor.user();
    } else {
        console.log("Something went wrong!");
    }
    
    if(u !== null && u !== undefined) {
        if(u.applytoken.expired) {
        
            Bert.alert('<b>Your link has been expired!<br />We will send you another ones at Saturday!<b/>', 'danger');

        } else {
            if(token === u.applytoken.yes) {
                status = 'yes';
            } else if(token === u.applytoken.no) {
                status = 'no';
            } else if(token === u.applytoken.soon) {
                status = 'soon';
            } else {
                Bert.alert("<b>This link is not for you!<br />Try to login correct account!<b/>", 'danger');
                FlowRouter.go("/");
            }
            //Meteor.users.update({_id: Meteor.userId()}, {$set: {'applytoken.expired': true}});
            onData(null, {status});
        }
        
    } else {
        
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
)(Update);
