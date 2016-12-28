import Confirm from '../components/Confirm.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {

    let verified = null;
    let u = null;
    let emails = null;
    if(Meteor.subscribe('user.single', Meteor.userId()).ready()){
        u = Meteor.user();
        verified = u.emails[0].verified;
        emails = u.emails[0].address;
    } else {
        console.log("Something went wrong!");
    }
    
    onData(null, {verified, emails});

    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    clearErrors: actions.users.clearErrors,
    resend: actions.users.resendEmail,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Confirm);
