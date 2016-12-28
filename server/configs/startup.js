import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(function() {
    // Configures "reset password account" email link
    Accounts.urls.resetPassword = function(token){
        return Meteor.absoluteUrl("reset-password/" + token);
    };

    // Configures "enroll account" email link
    Accounts.urls.enrollAccount = function(token){
        return Meteor.absoluteUrl("enroll-account/" + token);
    };

    // Configures "verify email" email link
    Accounts.urls.verifyEmail = function(token){
        return Meteor.absoluteUrl("verify-email/" + token);
    };

});

