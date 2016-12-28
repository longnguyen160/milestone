import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Applications} from '/lib/collections';

export default function() {

  Meteor.publish("application.list", function(){
    console.log("abceds");
    console.log(Applications.find().fetch());
    return Applications.find();
  });
}
