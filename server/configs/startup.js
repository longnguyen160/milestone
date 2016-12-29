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
            //return parser.text('every 15 secs');
        },
        job: function() {
            console.log("Fetching users from database!");
            let users = Accounts.users.find().fetch();
            console.log("Sending Email");
            for(let i = 0; i < users.length; i++) {
                if(users[i].roles === 'freelancer')
                    Meteor.call('sendEmail',
                    users[i].emails[0].address,'admin@zigvy.com',
                    'Confirm Application',
                    'Nhin cai qq gi`');
            }
            console.log("Sending Email Completed")
        }
    });
    SyncedCron.start();
    console.log("Scheudler started!");
});


