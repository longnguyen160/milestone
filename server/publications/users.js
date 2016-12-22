import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export default function () {
  Meteor.publish('users.email', function (email) {
    return Users.findOne(email);
  });
}
