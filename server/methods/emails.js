import {Email} from 'meteor/email';

export default function() {
    Meteor.methods({
        sendEmail: function (to, from, subject, text) {
            //check all variable
            check([to, from, subject, text], [String]);
            //do not block aka wait until this function is finished.
            //you can do anything else while this function is sending email, no need to wait;
            this.unblock();
            Email.send({
                to: to,
                from: from,
                subject: subject,
                text: text
            });
        }
    });
}