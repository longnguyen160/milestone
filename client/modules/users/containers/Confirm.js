import Confirm from '../components/Confirm.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {

    let verified = null;
    let u = null;
    
    if(Meteor.subscribe('user.single', Meteor.userId()).ready()){
        u = Meteor.user();
        verified = u.emails[0].verified;
    } else {
        console.log("Something went wrong!");
    }
    
    onData(null, {verified});

    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Confirm);
