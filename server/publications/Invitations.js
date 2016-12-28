import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {InvitationCode} from '/lib/collections';

export default function() {

  Meteor.publish("Invitation.list", function(id){
    check(id,Match.Any);
      return InvitationCode.find({uniqueCode:id});
  });
}
