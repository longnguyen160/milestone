import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(function() {
    Accounts.config({sendVerificationEmail: true, forbidClientAccountCreation: false})
    console.log("Hi from server side");
});



