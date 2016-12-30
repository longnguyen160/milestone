import UserProfile from '../components/UserProfile.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {Image} from '/lib/collections';

export const composer = ({context, username, clearErrors}, onData) => {

    let u = null;
    let availability = {};
    let name = null;
    let status = null;
    let date = null;
    let img = null;
    let imgURL = null;
    
    console.log("Username: " + username);
    if(Meteor.subscribe('username.find', username).ready()){
        u = Meteor.users.find({username:username}).fetch()[0];
        const userId = Meteor.userId();
        if (Meteor.subscribe('img.single').ready()) {
            img = Image.find({userId: userId}).fetch();
            if (img[0] !== undefined)
                imgURL = img[0].imgURL;
            else imgURL = '';
        }
    } else {
        console.log("Something went wrong UserProfile!");
    }
    if(u === null || u === undefined) {
        onData(null, {imgURL});
    } else {
        availability = (u !== null || u !== undefined) && u.roles === 'freelancer';
        name = u.firstName + " " + u.lastName;
        status = u.availability.status;
        date = u.availability.date;
        onData(null, {availability, name, status, date, username, imgURL});
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
