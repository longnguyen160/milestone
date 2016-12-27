import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
    Meteor.methods({
        'get_role'(email){
            check(userId, String);
            return Accounts.findUserByEmail(email);
        }
    });
}