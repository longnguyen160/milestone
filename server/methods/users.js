import {Categories, Items} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
  Meteor.methods({
    'users.sendPassword'(email) {
      check(email, String);
      var user = Collection.findOne({_id:"recordId"});



    }
  })
}
