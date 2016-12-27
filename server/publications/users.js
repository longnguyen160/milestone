import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('users.email', function (email) {
    return Users.findOne(email);
  });
}
