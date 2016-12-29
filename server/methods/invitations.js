import {InvitationCode} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random'

export default function() {
    Meteor.methods({
      'invitation.generate'(count, usage) {

            check([usage,count], [Match.Any]);
            const date = new Date();

            for (let i = 0; i < count; i++) {
              const code = Random.id(5).toUpperCase();
              const dup = InvitationCode.find({code:code}).fetch();
              if (dup[0]) {
                InvitationCode.update(
                  {code:code},
                  {$set:{
                    usage:usage,
                    uniqueCode: date.valueOf()
                    }
                  }
                );
              } else {
                InvitationCode.insert({
                  code:code,
                  usage:usage,
                  uniqueCode: date.valueOf()
                });
              }
            }
            return date.valueOf();
        }
    },
    {
      'invitation.checkInvitationCode'(invitationCode){

          check(invitationCode,String);
          const code = InvitationCode.find({code:invitationCode}).fetch();

          let errorString = '';
          if (!code[0]) {
            errorString = 'The invitation code is not exist';
          } else if (code[0].usage === 0) {
            errorString = 'The invitaiton code is expired';
          }
          if (errorString.length !== 0) {
            throw new  Meteor.Error('InvitationError', errorString);
          }

    }}
  );
}
