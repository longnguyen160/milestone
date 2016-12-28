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
    
    var MyLogger = function(opts) {
        console.log('Level', opts.level);
        console.log('Message', opts.message);
        console.log('Tag', opts.tag);
        }

        SyncedCron.config({
        logger: MyLogger
    });

    SyncedCron.add({
        name: 'Test Send Mail Scheduler',
        schedule: function(parser) {
            // parser is a later.parse object
            return parser.text('at 7:00am on the last day of the week');
        },
        job: function() {
            console.log("Hi there! I'm a scheduler!");
            Meteor.call('sendEmail','a@a.com','b@b.com','Test Subject','Test text');
            
        }
    });
    SyncedCron.start();
    console.log("Scheudler started!");
});


