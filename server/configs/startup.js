import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

function mailContent(fname, lname, token) {
    return "<!DOCTYPE html>\
            <html>\
                <head>\
                    <style>\
                        .btn {\
                            border: none;\
                            color: white;\
                            padding: 8px 15px;\
                            text-align: center;\
                            text-decoration: none;\
                            display: inline-block;\
                            font-size: 16px;\
                            margin: 4px 2px;\
                            cursor: pointer;\
                            border-radius: 5px;\
                        }\
\
                        #btn1 {\
                            background-color: #3AC162;\
                        }\
\
                        #btn2 {\
                            background-color: #ED5A5A;\
                        }\
\
                        #btn3 {\
                            background-color: #33cccc;\
                        }\
\
                        #btn {\
                            text-align: center;\
                        }\
\
                        h3 {\
                            text-align: center;\
                        }\
\
                        p {\
                            text-align: center;\
                        }\
\
                        #container {\
                            margin: 0 auto;\
                            position: relative;\
                        }\
\
                        #box {\
                            margin: auto;\
                            position: absolute;\
                            top: 0;\
                            left: 0;\
                            right: 0;\
                            bottom: 0;\
                        }\
                    </style>\
                </head>\
                <body>\
                    <div id='container'>\
                        <div id='box'>\
                            <h3>Hi" + fname + " " + lname + "</h3>\
                            <p>Are you available ?</p>\
                            <br></br>\
                            <div id='btn'>\
                                <a id='btn1' class='btn' href='http://localhost:3000/profile/update/"+token.yes+"'>YES</a>\
                                <a id='btn2' class='btn' href='http://localhost:3000/profile/update/"+token.no+"'>NO</a>\
                                <a id='btn3' class='btn' href='http://localhost:3000/profile/update/"+token.soon+"'>SOON</a>\
                            </div>\
                        </div>\
                    </div>\
                </body>\
            </html>";
}

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
            var randtoken = require('rand-token');
            let yes, no, soon;
            for(let i = 0; i < users.length; i++) {
                if(users[i].roles === 'freelancer') {
                    if(users[i].availability.status !== 'soon') {
                        
                        if(users[i].applytoken === undefined ||
                        users[i].applytoken === null || 
                        users[i].applytoken.expired === true) {
                            yes = randtoken.generate(32);
                            no = randtoken.generate(32);
                            soon = randtoken.generate(32);
                            Meteor.users.update({
                                _id: users[i]._id}, 
                                {$set: {
                                'applytoken.expired' : false,
                                'applytoken.yes':yes,
                                'applytoken.no':no,
                                'applytoken.soon':soon
                                }
                            })

                        } else {
                            yes = users[i].applytoken.yes;
                            no = users[i].applytoken.no;
                            soon = users[i].applytoken.soon;
                        }

                        Meteor.call('sendEmail',
                        users[i].emails[0].address,'admin@zigvy.com',
                        'Confirm Application',
                        mailContent(users[i].firstName, users[i].lastName, 
                        {yes: yes, no: no, soon: soon}));
                        
                    }
                }
            }
            console.log("Sending Email Completed")
        }
    });
    SyncedCron.start();
    console.log("Scheudler started!");
});


