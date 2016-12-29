import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Applications} from '/lib/collections';

export default function() {

  Meteor.publish(
    "application.list", function(){
    return Applications.find();
  });
}
