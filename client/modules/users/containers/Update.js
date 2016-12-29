import Update from '../components/Update.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, token, clearErrors}, onData) => {

    const {Meteor, FlowRouter} = context();
    const {content} = context();
    let u = null;
    let status = null;
    let error = null;

    if(Meteor.subscribe('user.single', Meteor.userId()).ready()){
        u = Meteor.user();
        if(u !== null && u !== undefined) {
            if(u.applytoken.expired) {
                Bert.alert('<b>Your link has been expired!<br />We will send you another ones at Saturday!<b/>', 'danger');
                FlowRouter.go("/");
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
            }
        } else {
           console.log("Something wrong in Update.js"); 
        }
    } 
    onData(null, {status});
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
