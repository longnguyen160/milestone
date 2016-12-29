import MainLayout from '../components/MainLayout.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {Image} from '/lib/collections';

export const composer = ({context, clearErrors}, onData) => {
    const {Meteor} = context();
    const {content} = context();
    const {foot} = context();

    let role = null;
    let u = null;
    let img = null;
    let bgURL = null;
    if(Meteor.subscribe('user.single', Meteor.userId()).ready()){
        u = Meteor.user().roles;
        const userId = Meteor.userId();
        if (Meteor.subscribe('img.single').ready()) {
            img = Image.find({userId: userId}).fetch();
            if (img[0] !== undefined)
                bgURL = img[0].bgimgURL;
            else bgURL = '';
        }

    } else {
        console.log("Something went wrong!");
    }
    if(u != null)
        role = u != "admin";
    if (img)
        onData(null, {role, foot, bgURL});
    else onData(null, {role, foot});

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
