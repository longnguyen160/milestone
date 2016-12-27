import {Invitation} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
    Meteor.methods({
        'invitation.generate'(usage) {
            check(usage, Integer);
            for (var i = 0; i < usage; i++)
                Invitation.insert(Random.id(5).toUpperCase(), usage);
        }
    });
}