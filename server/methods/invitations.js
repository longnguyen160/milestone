import {InvitationCode} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random'

export default function() {
    Meteor.methods({'invitation.generate'(count, usage) {
            check(usage, Match.Any);
            check(count,Match.Any);
            count = parseInt(count);
            usage = parseInt(usage);
            const date = new Date();
            console.log(date.valueOf());
            for (let i = 0; i < count; i++) {
              const code = Random.id(5).toUpperCase();
              const dup = InvitationCode.find({code:code}).fetch();
              console.log('duplicated:');
              console.log(dup);
              if (dup[0]) {
                console.log('xzx');
                InvitationCode.update(
                  {code:code},
                  {$set:{
                    usage:usage,
                    uniqueCode: date.valueOf()
                    }
                  }
                );
              } else {
                console.log('abc');
                InvitationCode.insert({
                  code:code,
                  usage:usage,
                  uniqueCode: date.valueOf()
                });
              }
            }
            console.log(date.valueOf());
            return date.valueOf();
        }
    });
    Meteor.methods({'invitation.checkInvitationCode'(invitationCode){
          check(invitationCode,String);
          console.log(invitationCode);
          const code = InvitationCode.find({code:invitationCode}).fetch();
          let errorString = '';
          if (!code[0]) {
            errorString = 'The invitation code is not exist';
          } else if (code.usage === 0) {
            errorString = 'The invitaiton code is expired';
          }
          console.log(errorString);
          if (errorString.length !== 0) {
            console.log('Hello2');
            throw new  Meteor.Error('InvitationError', errorString);
          }
    }});
}
